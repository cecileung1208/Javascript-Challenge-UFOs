// from data.js
var tableData = data;

//TABLE

// Select tbody - Input the tableData here
var tbody = d3.select("tbody");


//Loop through data and insert each row/field index.html

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

// Determine if there are any inputs in each of the 5 input fields through this function.

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

  // We need to select input element and set the input value from the 5 columns (datetime, city, state, country, and shape).
   
  // Date - select with id "datetime"
  var element_datetime = d3.select("#datetime");
  var input_datetime = element_datetime.property("value");

  // City - select with id "city"
  var element_city = d3.select("#city");
  var input_city = element_city.property("value");

  // State - select with id "state"
  var element_state = d3.select("#state");
  var input_state = element_state.property("value");
  
  // Country - select with id "country"
  var element_country = d3.select("#country");
  var input_country = element_country.property("value");

  // Shape - select with id "shape"
  var element_shape = d3.select("#shape");
  var input_shape = element_shape.property("value");
  

  // Set variable to look for information in the tableData
  var entry_results = tableData;


  // When the user enter the entry values in any or all of the 5 fields, the entryValue function looks for those inputs.
  // The below results will query for the entry values for the 5 fields from the tableData.

  entry_results = entryValue(entry_results, 'datetime', input_datetime);
  entry_results = entryValue(entry_results, 'city', input_city);
  entry_results = entryValue(entry_results, 'state', input_state);
  entry_results = entryValue(entry_results, 'country', input_country);
  entry_results = entryValue(entry_results, 'shape', input_shape);

 
 // Determine if info is displayed correctly
 // console.log(results)

  // After searching for the information, we need to select the tbody again to insert results.  
  var tbody = d3.select("tbody");

 //Clear page before displaying entry results on the page
  tbody.html("");

  //Loop through entry_results data
  entry_results.forEach((ufo) => {
    //Append Rows to table
    var row = tbody.append("tr");

    //Insert the entry_results Array into the table
    Object.entries(ufo).forEach(([key, value]) => {

    //Add cells to each row
    var cell = row.append("td");

    //Add value to each cell
    cell.text(value);
    });
  });
  
});
