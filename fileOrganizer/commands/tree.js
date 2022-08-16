// const { count } = require("console");
const fs=require("fs");
const path=require("path");
let srcPath="/Users/DELL/Desktop/HTML1/Node";

let counts=1;
let result="";
function tree(srcPath){
    let readArr=fs.readdirSync(srcPath);
    // console.log(readArr);
    // let isFolder=fs.lstatSync(srcPath).isDirectory();
    // console.log(isFolder);
    for(let i=0;i<readArr.length;i++){
        
        let joinPath=path.join(srcPath,readArr[i]);
        let is_File=fs.lstatSync(joinPath).isFile();
        if(is_File){
            console.log(readArr[i]);
        }
        else{
            for(let j=0;j<counts;j++){
                result=result+"  ";
            }
            console.log(result+path.basename(joinPath));
            tree(joinPath);
        }
    }

}

tree(srcPath);