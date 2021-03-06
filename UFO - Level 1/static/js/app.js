// from data.js
var tableData = data;

//TABLE

// select tbody - this is where to input the UFO data into the table
var tbody = d3.select("tbody");

//Loop Through `data` and console.log each weather report object
tableData.forEach((ufo) => {

    //Append Rows to table
    var row = tbody.append("tr");

    //Insert the tableData Array into the table
    Object.entries(ufo).forEach(([key, value]) => {

        //Add cells to each row
        var cell = row.append("td");
        
        //Add value to each cell
        cell.text(value);

    });

});

//FILTER FOR DATE

var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 

button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // filter data from the date's input
  var filteredData = tableData.filter(date => date.datetime === inputValue);


  //see if output results are captured
  //console.log(inputValue);
  //console.log(filteredData);

  // Display Filtered information after inputing the date

    // select tbody - this is where to input the UFO filtered table
    var list = tbody;

    // empty existing table before we input the new information
    list.html("");

    // 
    filteredData.forEach((ufo) => {
    //Append Rows to table
    var row = tbody.append("tr");

    //Insert the tableData Array into the table
    Object.entries(ufo).forEach(([key, value]) => {

        //Add cells to each row
        var cell = row.append("td");
        
        //Add value to each cell
        cell.text(value);

    });

  });
};





 