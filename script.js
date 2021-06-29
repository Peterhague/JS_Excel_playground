var xlsx = require("xlsx");
var wb = xlsx.readFile("test-data.xlsx");
console.log(wb.SheetNames);
let table = document.getElementById("tbl-data");
table.innerHTML(wb);
let par = document.getElementById("testpar");
par.style.backgroundColor = "red";