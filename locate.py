import json
import requests
from bs4 import BeautifulSoup

# URL of the Earth911 search results page
url = "https://search.earth911.com/?what=CFLs%2C+desktop+computers%2C+cell+phones%2C+etc...&where=78712&list_filter=all&max_distance=25"

# Request the page content
response = requests.get(url)
if response.status_code == 200:
    # Parse the page with BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Adjust based on actual structure; placeholder classes are used here
    locs1 = soup.find_all("p", class_="address1")
    locs2 = soup.find_all("p", class_="address2")
    locs3 = soup.find_all("p", class_="address3")
    locations = list(map(lambda adr: (f"{adr[0].text} {adr[1].text}, {adr[2].text}"), zip(locs1, locs2, locs3)))
    
    print(locations)
    descs = soup.find_all("div", class_="description")
    positions = []
    for desc in descs:
        href = desc.find('a')["href"]
        # Extract longitude and latitude from the href attribute
        latitude = float(href.split("latitude=")[-1].split("&")[0])
        longitude = float(href.split("longitude=")[-1].split("&")[0])
        positions.append((latitude, longitude))
    print(positions)

    mapping = dict(zip(locations, positions))
    with open("locations.json", "w") as f:
        json.dump(mapping, f)

        
else:
    print("Failed to retrieve data.")
