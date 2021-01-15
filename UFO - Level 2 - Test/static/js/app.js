// from data.js
var tableData = data;

//TABLE

// select tbody - this is where to input the UFO data into the table
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each weather report object
var ufoTable = tableData.forEach((ufo) => {

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

// MULTIPLE FILTERS 
var filters = {};



function filterUpdate() {
   

    var thisElement = d3.select(this).select(".form-control");
    var elementValue = thisElement.property("value");
    var filterID = thisElement.attr("id");

    if (elementValue){
      filters[filterID] = elementValue;
    }
    else{
      delete filters[filterID];
    }
  filterTable();
}

var button = d3.select("#filter-btn");
button.on("click", filterTable)

function filterTable() {
  let filterData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
  filterData = filterData.filter(row => row[key] === value );
  
});
  ufoTable(filterData);
};

d3.selectAll(".filter").on(change, filterUpdate);

ufoTable(tableData)
