const a = require("fs");

let inputArr=process.argv.slice(2);
// console.log(inputArr);

let filesArr=[];

for(let i=0;i<inputArr.length;i++){

    filesArr.push(inputArr[i]);
}

console.log(filesArr);


