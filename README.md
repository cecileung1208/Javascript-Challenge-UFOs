# UFO Data Analysis

![Image](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/images/nasa.jpg)

## Background

The purpose of this project is to create an interactive HTML table to search for specific information on UFO sightings data.  The data provided is in JSON format and we can use D3 to filter, generate and format the table.

## Requirements

1) Create an HTML interactive table to search for UFO sightings by date.
2) Create another HTML interactive to searc for UFO sigthings by multiple search categories including date/time, city, state, country, and shape.

## Datasets

[UFO Sightings Dataset](https://github.com/cecileung1208/UFO-Data-Analysis/blob/main/UFO%20-%20Level%201/static/js/data.js)

## Method

* Import the UFO sightings data from the JSON array.
* Create a function to generate and display a table from the full JSON array. 
* Add filter input fields to the HTML web page for date, city, state, country, and shape.
* Create a function to filter the JSON array based on user input, and generate and display the updated table.
* Create an HTML file that displays all the information by connecting them to the Javascript files.

## Scripts

1) UFO Sightings by Date
* [Home Page](https://github.com/cecileung1208/UFO-Data-Analysis/blob/main/UFO%20-%20Level%201/index.html)
* [Javascript File](https://github.com/cecileung1208/UFO-Data-Analysis/blob/main/UFO%20-%20Level%201/static/js/app.js)
* [CSS Stylesheet](https://github.com/cecileung1208/UFO-Data-Analysis/blob/main/UFO%20-%20Level%201/static/css/style.css)


## Results



WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

To do this, a code is needed to create a table dynamically based upon a [dataset](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/data.js) we provide. We also need to allow our users to filter the table data for specific values. The code will only use JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.


## Level 1: Automatic Table and Date Search

* A HTML web page, [index.html](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/index.html) have been created to use the Dataset

* With the [UFO dataset](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/data.js) provided in the form of an array of JavaScript objects, a [code](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/app.js) have been written to:
  * Append a table to the web page and then adds new rows of data for each UFO sighting.
  * Create a date form and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
  * **Note:** The column for date/time, city, state, country, shape, and comment are matched as per the given dataset.
  
 ## Level 2: Multiple Search Categories
 
* Upon completion of Level 1, we can use multiple input tags to make better use of the data!
* A new [HTML page](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/index.html) and [JavaScript code](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/js/app.js) have been created for the user to set multiple filters and search for UFO sightings using the following criteria based on the following table columns:

 1. date/time <br>
 2. city <br>
 3. state <br>
 4. country <br>
 5. shape <br>
 
 ## Folders and Directories - Javascript-Challenge-UFOs **

Details of Folders and Directors for Javascript-Challenge-UFOs are listed in the tables below.


#### Javascript-Challenge-UFOs
| Folder Name    | File Name |
| ------------- | ------------- |
| [Javascript-Challenge-UFOs](https://github.com/cecileung1208/Javascript-Challenge-UFOs)  | [README.md](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/README.md)|
|                            | [UFO - Level 1 folder](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201)|
|                            | [UFO - Level 2 folder](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202)|


#### UFO - Level 1 - HTML file and Static Folder

| Folder Name    | File Name |
| ------------- | ------------- |
| [UFO - Level 1](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201) | [index.html](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/index.html)  |
|               | [static folder](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201/static)  |

#### UFO - Level 1 - Static Folder
| Folder Name    | Subfolder Name | File Name |
| ------------- | -------------   | -------------   |
| [static](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201/static)| [css](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201/static/css)   | [style.css](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/css/style.css)   |
| | [images](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201/static/images)   | [nasa.jpg](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/images/nasa.jpg)   |
| | | [ufo.svg](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/images/ufo.svg)   |
| | [js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%201/static/js)   | [app.js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/app.js)   |
| | | [data.js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/data.js)   |


#### UFO - Level 2 - HTML file and Static Folder

| Folder Name    | File Name |
| ------------- | ------------- |
| [UFO - Level 2](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202) | [index.html](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/index.html)  |
|               | [static folder](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202/static)  |


 #### UFO - Level 2 - Static Folder
| Folder Name    | Subfolder Name | File Name |
| ------------- | -------------   | -------------   |
| [static](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202/static)| [css](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202/static/css)   | [style.css](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/css/style.css)   |
| | [images](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202/static/images)   | [nasa.jpg](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/images/nasa.jpg)   |
| | | [ufo.svg](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/images/ufo.svg)   |
| | [js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/tree/main/UFO%20-%20Level%202/static/js)   | [app.js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/js/app.js)   |
| | | [data.js](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%202/static/js/data.js)   |
 

