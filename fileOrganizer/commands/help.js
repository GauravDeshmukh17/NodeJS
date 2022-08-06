function help(){
    console.log(`

        These are some myCLI commands used in various situations :

        (1) node wcat.js tree <path> 
        (2) node wcat.js organize <path> 
        (3) node wcat.js help <path> 

    `)
}

module.exports={
    exportedHelp:help
}