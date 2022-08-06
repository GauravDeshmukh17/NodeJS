let helpFun=require("./commands/help")

let inputArr=process.argv.slice(2);
let command=inputArr[0];

// console.log(inputArr);
// console.log(command);

switch(command){

    case "tree":
        console.log("This is tree command");
        break;

    case "organize":
        console.log("This is organize command");    
        break;

    case "help":
        // console.log("This is help command");
        helpFun.exportedHelp();
        break;
    
    default:
        console.log("commmand not recognized");
}

