1. KNOWLESS

2. Keywords: rental housing, safe, affordable

3. DATASETS
Climate Data Online:
https://www.ncdc.noaa.gov/cdo-web/datasets/GHCND/locations/CITY:US170006/detail
Used to retrieve info about the weather (doesn't work propperly yet)

Affordable Rental Dousing Developments:
https://data.cityofchicago.org/Community-Economic-Development/Affordable-Rental-Housing-Developments/s6ha-ppgi
Used to retrieve info about rental housing in Chicago

4. This app is intended to provide an easier way to decide where you can move to when you want to study on the Department of Computer Science – University of Illinois, Chicago.

Fill in the structued description:

Map View:

[Y] Basic Map with specific location
[Y] Markers for location of rental housing
[Y] Labels for rental housing' names
[Y] InfoWindow to show detail information of rental housing (after clicking the marker)
[N] Any other cover on the map (for example, cloud cover to show the weather effect)
Data Visualization:

[N] [describe] Use Graph? What is the type?
[N] [List] Any interaction available on the graph? 

[Y] [List] Any information output?
	-Marker labels with the name of the place
	-Click on the marker: info appears under params
[N] [List] Any operation option (filters)?
[N] [List] Any information input?
[N] [List] Interaction with Map?
[N] [List] Interaction with data visualization?

5. Use of bootstrap via MaxCDN. jQuery for $.ajax requests. Maps API. No external dependencies to build, just open "index.html"

6. Browsers used: Chrome, Firefox

7. 
-Problems understanding the way to retrieve very specific information from Climate Data Online for weather and average temperature. [still not working]