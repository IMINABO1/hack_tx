from flask import Flask, request, jsonify, Response, render_template
import tensorflow as tf
import numpy as np
import cv2

app = Flask(__name__, template_folder='./templates')

# Load your Keras model
model_path = 'models/trained_model/trash_classifier.keras'  # Ensure this path is correct
model = tf.keras.models.load_model(model_path)

# Define the class labels
class_labels = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']

# Mapping function
def map_to_broad_category(label):
    if label in ['cardboard', 'paper']:
        return 'compost'
    elif label in ['plastic', 'metal', 'glass']:
        return 'recyclable'
    else:
        return 'trash'

# Function to preprocess the image
def preprocess_image(frame):
    processed_image = cv2.resize(frame, (224, 224)) / 255.0  # Resize and normalize
    return np.expand_dims(processed_image, axis=0)  # Add batch dimension

# Route for image classification
@app.route('/classify', methods=['POST'])
def classify_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    file = request.files['file']
    if not file:
        return jsonify({'error': 'File not found'}), 400

    # Preprocess the image
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    processed_image = preprocess_image(image)

    # Make predictions
    predictions = model.predict(processed_image)
    predicted_class = np.argmax(predictions, axis=1)[0]
    model_output_label = class_labels[predicted_class]
    broad_category = map_to_broad_category(model_output_label)

    return jsonify({
        'category': broad_category
    })

# Route for video feed with classification
def generate_frames():
    cap = cv2.VideoCapture(0)
    score = 0  # Initialize score

    while True:
        success, frame = cap.read()
        if not success:
            break
        
        # Preprocess the frame for classification
        processed_frame = preprocess_image(frame)

        # Make predictions on the frame
        predictions = model.predict(processed_frame)
        predicted_class = np.argmax(predictions, axis=1)[0]
        model_output_label = class_labels[predicted_class]
        broad_category = map_to_broad_category(model_output_label)

       
        feedback_text = f"Category: {broad_category}"
        cv2.putText(frame, feedback_text, (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/')
def home():
    return render_template('index.html') 

if __name__ == '__main__':
    app.run(debug=True)
