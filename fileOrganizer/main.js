let helpFun=require("./commands/help");
let organizeFun=require("./commands/organize");

let inputArr=process.argv.slice(2);
let command=inputArr[1];


// console.log(inputArr);
// console.log(command);

switch(command){

    case "tree":
        console.log("This is tree command");
        break;

    case "organize":
        // let srcPath="/Users/DELL/OneDrive/Desktop/HTML1/Node/fileOrganizer/downloads";
        // organizeFun.orgz(srcPath); 
        let srcPathInput=inputArr[0];
        organizeFun.orgz(srcPathInput);
        break;

    case "help":
        helpFun.exportedHelp();
        break;
    
    default:
        console.log("commmand not recognized");
}

