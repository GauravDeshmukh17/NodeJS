const a=require("fs");

let res=a.appendFileSync("file1.txt","Hello World!\n");
res=a.appendFileSync("file1.txt","I am file1.txt\n");
console.log(res);
