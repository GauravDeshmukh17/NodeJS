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


//------------------------- Create File ------------------------------------

// According to input which file is present is checked (file which is present and comes first in input out off all existing files) and if file is not present then according to input files are created.
let isPresentC=optionArr.includes("-c");
if(isPresentC){
    let fileExists;
    let existFileName;
    for(let i=0;i<filesArr.length;i++){
        fileExists=fs.existsSync(filesArr[i]);
        if(fileExists==true){
            fileExists=true;
            existFileName=filesArr[i];
            break;
        }
    }

    if(fileExists){
        console.log("error ^ \n"+existFileName+" already exist");
        return;
    }
    else{

        if(optionArr[0]!="-c"){
            console.log("error ^ \n"+filesArr[0]+" does not exist");
            return;
        }
        else{
            for(let i=0;i<filesArr.length;i++){
                let createFile=fs.appendFileSync(filesArr[i],"");
                console.log(createFile);
            }
        }
    }
}

//-----------------------------------------------------------------------

//-------------------------- Delete File --------------------------------

let isPresentD=optionArr.includes("-d");
if(isPresentD){

    let fileExists;
    let notExistingFileName;
    for(let i=0;i<filesArr.length;i++){
        fileExists=fs.existsSync(filesArr[i]);
        if(fileExists==false){
            fileExists=false;
            notExistingFileName=filesArr[i];
            break;
        }
    }

    if(fileExists==false){
        console.log("error ^\n"+notExistingFileName+" does not exist");
        return;
    }
    else{
        for(let i=0;i<filesArr.length;i++){
            console.log(fs.unlinkSync(filesArr[i]));
        }
        return;
    }

}


//-----------------------------------------------------------------------

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
    content=content+fileContent+ "\r\n";
}

// console.log(content);

contentArr=content.split("\r\n");
// console.log(contentArr);



/*for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]=='\r'){
        contentArr[i]="";                 // do't use
    }
    
}*/


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

// console.table(contentArr);




let tempArr=[];
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
}


// console.log(tempArr);
if(optionArr.includes("-s") || optionArr.length==0){
    for(let i=0;i<tempArr.length;i++){
        console.log(tempArr[i]);
    }
}



contentArr=tempArr

// choosing -n or -b
let indexOfN=optionArr.indexOf("-n");
let indexOfB=optionArr.indexOf("-b");
// if -n or -b is not found then -1 is return

let finalOption="";

if(indexOfN!=-1 && indexOfB!=-1){
    if(indexOfN<indexOfB){
        finalOption="-n";
    }
    else{
        finalOption="-b";
    }
}
else{
    if(indexOfN==-1 && indexOfB!=-1){
        finalOption="-b";
    }
    else if(indexOfB==-1 && indexOfN!=-1){
        finalOption="-n";
    }
}


// calling of function by evaluating values of -n and -b 
if(finalOption=="-n"){
    valueOfN();
}
else if(finalOption=="-b"){
    valueOfB();
}


function valueOfN(){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]="("+(i+1)+") "+contentArr[i];
    }
    // console.log(contentArr);
    for(let i=0;i<contentArr.length;i++){
        console.log(contentArr[i]);
    }
}


function valueOfB(){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]="("+count+") "+contentArr[i];
            count++;
        }
    }
    // console.log(contentArr);
    for(let i=0;i<contentArr.length;i++){
        console.log(contentArr[i]);
    }
}



