let helpFun=require("./commands/help");
let organizeFun=require("./commands/organize");

let inputArr=process.argv.slice(2);
let command=inputArr[0];

// console.log(inputArr);
// console.log(command);

switch(command){

    case "tree":
        console.log("This is tree command");
        break;

    case "organize":
        organizeFun.exportedorganize(); 
        break;

    case "help":
        helpFun.exportedHelp();
        break;
    
    default:
        console.log("commmand not recognized");
}

