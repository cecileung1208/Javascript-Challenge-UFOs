// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//TABLE

// select tbody - this is where to input the UFO data into the table



// //Loop Through `data` and console.log each weather report object


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

var button = d3.select("#filter-btn");
button.on("click", function() {

  tbody.html("");

  // Select the input element and get the HTML node
  var inputElement = d3.select("#input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(entry => entry.datetime === inputValue ||
                                      entry.city === inputValue ||
                                      entry.state  === inputValue ||
                                      entry.country  === inputValue ||
                                      entry.shape === inputValue);

  

  var list = tbody;
  filteredData.forEach((selections) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
  });
  
});
