const fs = require("fs");

let inputArr=process.argv.slice(2);
// console.log(inputArr);


// filling input in array 
let filesArr=[];
let optionArr=[];

for(let i=0;i<inputArr.length;i++){ 
    let firstChar=inputArr[i].charAt(0);
    if(firstChar =='-'){
        optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}
// console.log(optionArr);
// console.log(filesArr);


// checking wheather file exists or not
for(let i=0;i<filesArr.length;i++){
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist){
        console.log("file does not exist");
        return;
    }
}


// reading data of file
let content= "";
for(let i=0;i<filesArr.length;i++){
    let fileContent=fs.readFileSync(filesArr[i]);
    content=content+fileContent+ "\n";
}

// console.log(content);

contentArr=content.split("\n");
// console.log(contentArr);

for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]=='\r'){
        contentArr[i]="";
    }
    
}


let isPresent=optionArr.includes("-s");
if(isPresent){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
}

// console.log(contentArr);




let tempArr=[];
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
}

console.log(tempArr);


