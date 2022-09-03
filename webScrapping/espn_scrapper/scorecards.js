const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const path=require("path");
const xlsx=require("xlsx");

function getInfoFromScorecard(url){

    // console.log("scorecardLink =",url);
    request(url,cb);
}

function cb(err,res,body){

    if(err){
        console.log(err);
    }
    else{
        getMatchDetails(body);
    }
}


function getMatchDetails(html){
    
    let selecTool=cheerio.load(html);
    let description=selecTool('div[class="ds-text-tight-m ds-font-regular ds-text-ui-typo-mid"]');
    // console.log(description.text());
    let descArr=description.text().split(",");
    // console.log(descArr);

    // get match number
    console.log("\t\t\t"+descArr[0]); 


    //get team names
    let teamNames=selecTool('span[class="ds-text-tight-l ds-font-bold ds-text-ui-typo hover:ds-text-ui-typo-primary ds-block ds-truncate"]');
    // console.log(teamNames.length);
    let team1=selecTool(teamNames[0]).text();
    let team2=selecTool(teamNames[1]).text();
    console.log("\t"+team1+" VS "+team2+"\n");

    
    // get venue
    let venue=descArr[1];
    console.log("Venue :"+venue);


    // get date
    let date=descArr[2]+descArr[3];
    console.log("Date :"+date);


    // get result
    let resultOfMatch=selecTool('p[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"]');
    let result=resultOfMatch.text()
    console.log("Result : "+result+"\n");


    //Inning details
    let allBatsmanTable=selecTool(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody");
    let htmlString="";
    let count=0;
    for(let i=0;i<allBatsmanTable.length;i++){
        htmlString+=selecTool(allBatsmanTable[i]).html();
        let allRows=selecTool(allBatsmanTable[i]).find("tr");
        // console.log(allRows.length);
        console.log("------- "+selecTool(teamNames[i]).text()+" Scorecard -------\n");
        for(let j=0;j<allRows.length-3;j++){
            // let playerData=selecTool(allRows[j]).text();
            // console.log(playerData);
            let eachCol=selecTool(selecTool(allRows[j])).find("td");
            // for(let k=0;k<eachCol.length;k++){
            //     console.log(selecTool(eachCol[k]).text());
            // }
            if(eachCol.length==8){
                let batsman=selecTool(eachCol[0]).text()
                console.log("Batsman : "+batsman);
                let totalRuns=selecTool(eachCol[2]).text();
                console.log("Total Runs : "+totalRuns);
                let totalBalls=selecTool(eachCol[3]).text();
                console.log("Total Balls : "+totalBalls);
                let total4s=selecTool(eachCol[5]).text();
                console.log("Total 4's : "+total4s);
                let total6s=selecTool(eachCol[6]).text();
                console.log("Total 6's : "+total6s);
                let sr=selecTool(eachCol[7]).text();
                console.log("Strike Rate(SR) : "+sr);
                console.log("Team : "+selecTool(teamNames[i]).text());
                console.log();
            }
            else{
                // do nothing
            }

            processInformation(team1,venue,date,result,batsman,totalRuns,totalBalls,total4s,total6s,sr);
            
        }
    
    }
    console.log("===============================================================");
    // console.log(htmlString);


    // let playerDetails=selecTool(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table>tbody>tr");
    // console.log(playerDetails);
    // console.log(playerDetails.text());
    // console.log(playerDetails.length);
    // for(let i=0;i<playerDetails.length;i++){

    //     let allCol=selecTool(playerDetails[i]).find("td");
    //     console.log(allCol.text());
        
    // }

}

function processInformation(team1,venue,date,result,batsman,totalRuns,totalBalls,total4s,total6s,sr){

    let teamNamePath=path.join(__dirname,"IPL",team1);
    let doesExist=fs.existsSync(teamNamePath);
    if(!doesExist){
        fs.mkdirSync(teamNamePath);
    }

    let playerPath=path.join(teamNamePath,batsman+".xlsx");
    let content=excelReader(playerPath,batsman);

    let playerObj={
        venue,
        date,
        result,
        batsman,
        totalRuns,
        totalBalls,
        total4s,
        total6s,
        sr
    };

    content.push(playerObj);
    ecxelWriter(playerPath,content,batsman);
}

function excelReader(playerPath,batsman){

    let doesExist=fs.existsSync(playerPath);
    if(!doesExist){
        return [];
    }
}

function ecxelWriter(playerPath,jsObject,sheetName){

    // creates new book
    let newWorkBook=xlsx.utils.book_new();

    // converts an array of JS objects to worksheet
    let newWorkSheet=xlsx.utils.json_to_sheet(jsObject);

    // aapends worksheet to workbook
    xlsx.utils.book_append_sheet(newWorkBook,newWorkSheet,sheetName);
    
    
}

module.exports={
    gifs:getInfoFromScorecard
}