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
    Object.entries(ufo).forEach(([key,value]) => {

        //Add cells to each row
        var cell = row.append("td");
        
        //Add value to each cell
        cell.text(value);

    });

});

// MULTIPLE FILTERS 

//Select Button and Set Event
var button = d3.select("#filter-btn");
button.on("click", function() {

  // empty existing table before we input the new information
  tbody.html("");

  // Select the input element and get the HTML node
  var inputElement = d3.select("#input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // filter data from using date, city, state, country and shape inputs from dropdown
  var filteredData = tableData.filter(entry => entry.datetime === inputValue ||
                                               entry.city === inputValue ||
                                               entry.state === inputValue ||
                                               entry.country === inputValue ||
                                               entry.shape === inputValue);

  //see if output results are captured
  //console.log(inputValue);
  //console.log(filteredData);

  //Loop through Filtered Data
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
  
});
