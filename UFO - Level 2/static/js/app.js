// from data.js
var tableData = data;

//TABLE

// select tbody - this is where to input the UFO data into the table
var tbody = d3.select("tbody");


//Loop Through data and add the to the table in index.html

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

// Select Button 
var button = d3.select("#filter-btn");

// Determine if there are any inputs in each of the 5 forms through this function.

function entryValue (entry, field, compare) {
  if(compare !== "") {
      return entry.filter(function(input) {
          if (input[field] === compare) {
              return true;
          }
      });
  }
  return entry;
}



// Create function to retrieve the inputs to query the table

button.on("click", function() {

  // Select the input element and get the HTML node for the date
  var element_datetime = d3.select("#datetime");
  // Get the value property of the input element for the date
  var input_datetime = element_datetime.property("value");


  // Select the input element and get the HTML node for the date
  var element_city = d3.select("#city");
  // Get the value property of the input element for the date
  var input_city = element_city.property("value");
  
  // Set variable for the information to be filtered
  var filteredData = tableData;

  results = entryValue(filteredData, 'datetime', input_datetime);
  results = entryValue(filteredData, 'city', input_city);
  
  console.log(results)


  var tbody = d3.select("tbody");
  tbody.html("");

  //Loop through Filtered Data
  results.forEach((ufo) => {
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
