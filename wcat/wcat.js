const a = require("fs");

let inputArr=process.argv.slice(2);
// console.log(inputArr);


// filling input in array 
let filesArr=[];

for(let i=0;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}

console.log(filesArr);


// checking wheather file exists or not
for(let i=0;i<filesArr.length;i++){
    let doesExist=a.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("file does not exist");
        return;
    }
}


// reading data of file
for(let i=0;i<inputArr.length;i++){
    let read=a.readFileSync(filesArr[i],"utf-8");
    console.log(read);
}








