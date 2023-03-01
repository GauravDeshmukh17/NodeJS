const fs=require("fs");

console.log("Before");

// fs.readFile("f1.txt",cb);
// function cb(err,data){
//     if(err){
//         console.log("error!");
//     }
//     else{
//         console.log(data+"");
//     }
// }

let promiseThatFileWillBeRead=fs.promises.readFile("f1.txt");
console.log(promiseThatFileWillBeRead);

promiseThatFileWillBeRead.then(printData);
promiseThatFileWillBeRead.catch(printError);

function printData(data){
    console.log("Promise that data will be printed");
    console.log(data+"");
}

function printError(err){
    console.log("error!");
}

console.log("After");