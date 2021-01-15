# Javascript-Challenge-UFOs

[!Image]()

WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.

There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

To do this, a code is needed to create a table dynamically based upon a [dataset](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/data.js) we provide. We also need to allow our users to filter the table data for specific values. The code will only use JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.


## Level 1: Automatic Table and Date Search

* A HTML web page, [index.html](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/index.html) have been created to use the Dataset

* With the [UFO dataset](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/data.js) provided in the form of an array of JavaScript objects, a [code](https://github.com/cecileung1208/Javascript-Challenge-UFOs/blob/main/UFO%20-%20Level%201/static/js/app.js) have been written to:
  * Append a table to the web page and then adds new rows of data for each UFO sighting.
  * Create a date form and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
  * **Note:** The column for date/time, city, state, country, shape, and comment are matched as per the given dataset.

