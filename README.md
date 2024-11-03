
# Disposed
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Challenges](#challenges)
- [Learnings](#learnings)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview

**Disposed** is a solution designed to [briefly describe the core purpose and main functionality of your project, e.g., "help users easily locate nearby trash disposal locations and recycling centers based on real-time data"]. 

This project was inspired by the opening speech from the Green Community at HackTX, which emphasized the importance of sustainable waste management. We wanted to create a tool that simplifies waste disposal classification and promotes responsible waste management.

## Features

- **Location-based waste disposal points**: Finds nearby disposal sites based on user location.
- **Map Integration**: Displays the points on an interactive map.
- **Easy categorization**: Quickly classifies waste items for appropriate disposal.
- **User-Friendly Interface**: Simple navigation and icon-based markers for intuitive use.
- **Scalable Backend**: Uses API integrations to keep location data up-to-date.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Leaflet.js
- **Backend**: Node.js, Express
- **APIs**: Location data from Earth911 API
- **Hosting**: [Choose a hosting option like AIPC, Cloudflare, etc.]
- **Map Integration**: Leaflet for map rendering

## Getting Started

Follow these instructions to set up the project locally or deploy it.

### Prerequisites

- **Node.js** (v12 or higher)
- **Git** for cloning the repository
- **API Key** from [Earth911](https://earth911.com) for accessing location data

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/username/project-name.git
   cd project-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```



3. **Run the Application**

   ```bash
   npm start
   ```

   The application should be accessible at `http://localhost:3000`.

## Usage

1. **Accessing the Map**: Upon launching, the map will load centered around your location.
2. **Viewing Trash Disposal Locations**: The map will display nearby disposal points with custom icons.
3. **Classifying Waste**: Input different types of waste to see specific disposal recommendations.


## Challenges

Some challenges our team encountered while developing this project:

- **Data Consistency**: Handling and parsing large data sets to ensure each location was correctly tagged and displayed.
- **Map Rendering**: Optimizing the map for fast loading and smooth interaction with multiple markers.
- **API Integration**: Managing API requests effectively while dealing with rate limits and data accuracy issues.

## Learnings

Our team gained a deeper understanding of:

- **Collaborative Development**: Leveraging each member's skills to work on different aspects of the project.
- **API Management**: Integrating and optimizing the use of external APIs to ensure real-time, accurate data.
- **Front-end Development**: Building an interactive map-based interface for a more engaging user experience.

## Future Enhancements

- **User Feedback**: Collect user input to improve the location accuracy and add new features.
- **Advanced Filters**: Enable users to search by type of waste (e.g., electronics, glass, etc.).
- **Mobile App**: Expand the project to a mobile application for easier accessibility on the go.
- **Offline Capabilities**: Implement offline storage for areas with limited internet connectivity.

## Contributors

This project was built by:

- **Iminabo Roberts** - Backend integration and API management
- **Daniel Enesi** - Frontend development and UI design
- **Joseph Oduyebo** - Mapping integration and database management

## Acknowledgments

Special thanks to HackTX and the Green Community for their inspiration and for promoting sustainable solutions. We also appreciate the support from [Earth911](https://earth911.com) for providing access to essential data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

--- 
