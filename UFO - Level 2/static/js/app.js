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

//Select Button and Set Event
var button = d3.select("#filter-btn");

// Determine if there are any inputs in each of the 5 forms

function entryValue (entry, field, compare) {
  if(compare !== "") {
      return entry.filter(function(input) {
          if (input[field] === compare) {
              return true;
          }
      });
  }
  return data;
}



// Create function to retrieve the inputs to query the table

button.on("click", function() {

  // empty existing table before we input the new information
  tbody.html("");

  // Select the input element and get the HTML node
  var element_datetime = d3.select("#datetime");
  // Get the value property of the input element
  var input_datetime = element_datetime.property("value");

  // Set variable for the information to be filtered
  var filteredData = tableData;

  var filteredData = entryValue(filteredData, 'datetime', input_datetime);
  
  console.log(filteredData)

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
