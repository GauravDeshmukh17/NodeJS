const xlsx=require("xlsx");
// console.log(xlsx);

let wb=xlsx.readFile("info.xlsx");
// console.log(wb);
// console.log(wb.SheetNames);
let sheetname=wb.SheetNames[0];
// console.log(wb.Sheets);
let ws=wb.Sheets[sheetname];
console.log(ws);

