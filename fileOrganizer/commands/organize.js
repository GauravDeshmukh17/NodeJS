const fs=require("fs");
const { extname } = require("node:path/win32");
const path=require("path");

let types={

    media:["mp4","mkv","mp3"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents:["docx","doc","pdf","xlsx","odt","ods","odp","odg","odf","txt","ps","tex"],
    app:["exe","dmg","pkg","deb"],
    images:["png","jpg","jpeg"]
}

function organize(srcPath){

    if(srcPath==undefined){
        srcPath=process.cwd();
        console.log(srcPath);
    }

    let organizedFiles=path.join(srcPath,"organized_files");
    console.log(organizedFiles);

    if(fs.existsSync(organizedFiles)==false){
        console.log(fs.mkdirSync(organizedFiles));
    }
    else{
        console.log("folder already exist");
    }


    let allFiles=fs.readdirSync(srcPath);
    // console.log(allFiles);


    for(let i=0;i<allFiles.length;i++){

        let pathOfFile=path.join(srcPath,allFiles[i]);
        // console.log(pathOfFile);
        let isFilePresent=fs.lstatSync(pathOfFile).isFile();
        // console.log(isFilePresent);

        if(isFilePresent){
            let ext=path.extname(allFiles[i]).split(".")[1];
            console.log(ext);

            let folderName=getFolderName(ext);
            console.log(folderName);
        }

    }

}

function getFolderName(ext){

    for(let key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
}

let srcPath="/Users/DELL/OneDrive/Desktop/HTML1/Node/fileOrganizer/downloads";
organize(srcPath);




