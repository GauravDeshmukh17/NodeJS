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

let contentArr=[];
function getMatchDetails(html){
    
    let selecTool=cheerio.load(html);
    let description=selecTool('div[class="ds-text-tight-m ds-font-regular ds-text-ui-typo-mid"]');
    // console.log(description.text());
    let descArr=description.text().split(",");
    // console.log(descArr);

    // get match number
    console.log("\t\t\t"+descArr[0]); 
    let matchNo= console.log("\t\t\t"+descArr[0])+"\n";
    fs.writeFileSync("scorecards.txt",matchNo,{flag:'a'}); 


    //get team names
    let teamNames=selecTool('span[class="ds-text-tight-l ds-font-bold ds-text-ui-typo hover:ds-text-ui-typo-primary ds-block ds-truncate"]');
    // console.log(teamNames.length);
    let team1=selecTool(teamNames[0]).text();
    let team2=selecTool(teamNames[1]).text();
    console.log("\t"+team1+" VS "+team2+"\n");
    let teamInfo="\t"+team1+" VS "+team2+"\n\n";
    fs.writeFileSync("scorecards.txt",teamInfo,{flag:'a'}); 
    
    // get venue
    let venue=descArr[1];
    let venue1="Venue : "+venue+"\n";
    fs.writeFileSync("scorecards.txt",venue1,{flag:'a'}); 
    console.log("Venue :"+venue);


    // get date
    let date=descArr[2]+descArr[3];
    let date1="Date : "+descArr[2]+descArr[3]+"\n";
    fs.writeFileSync("scorecards.txt",date1,{flag:'a'}); 
    console.log("Date :"+date);


    // get result
    let resultOfMatch=selecTool('p[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"]');
    let result=resultOfMatch.text();
    let result1="Result : "+resultOfMatch.text()+"\n\n";
    fs.writeFileSync("scorecards.txt",result1,{flag:'a'}); 
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
        let decoration="------- "+selecTool(teamNames[i]).text()+" Scorecard -------\n\n";
        fs.writeFileSync("scorecards.txt",decoration,{flag:'a'}); 
        for(let j=0;j<allRows.length-3;j++){
            // let playerData=selecTool(allRows[j]).text();
            // console.log(playerData);
            let eachCol=selecTool(selecTool(allRows[j])).find("td");
            // for(let k=0;k<eachCol.length;k++){
            //     console.log(selecTool(eachCol[k]).text());
            // }
            if(eachCol.length==8){
                let batsman=selecTool(eachCol[0]).text();
                let batsman1="Batsman : "+batsman+"\n";
                fs.writeFileSync("scorecards.txt",batsman1,{flag:'a'}); 
                console.log("Batsman : "+batsman);

                let totalRuns=selecTool(eachCol[2]).text();
                let totalRuns1="Total Runs : "+totalRuns+"\n";
                console.log("Total Runs : "+totalRuns);
                fs.writeFileSync("scorecards.txt",totalRuns1,{flag:'a'}); 

                let totalBalls=selecTool(eachCol[3]).text();
                let totalBalls1="Total Balls : "+totalBalls+"\n";
                fs.writeFileSync("scorecards.txt",totalBalls1,{flag:'a'}); 
                console.log("Total Balls : "+totalBalls);

                let total4s=selecTool(eachCol[5]).text();
                let total4s1="Total 4s : "+total4s+"\n";
                fs.writeFileSync("scorecards.txt",total4s1,{flag:'a'}); 
                console.log("Total 4's : "+total4s);

                let total6s=selecTool(eachCol[6]).text();
                let total6s1="Total 6s : "+total6s+"\n";
                fs.writeFileSync("scorecards.txt",total6s1,{flag:'a'}); 
                console.log("Total 6's : "+total6s);

                let sr=selecTool(eachCol[7]).text();
                let sr1="Strike Rate(SR) : "+sr+"\n";
                fs.writeFileSync("scorecards.txt",sr1,{flag:'a'}); 
                console.log("Strike Rate(SR) : "+sr);

                console.log("Team : "+selecTool(teamNames[i]).text());
                let teamBelongs="Team : "+selecTool(teamNames[i]).text()+"\n";
                fs.writeFileSync("scorecards.txt",teamBelongs,{flag:'a'}); 
                console.log();

                let ownTeam=selecTool(teamNames[i]).text();
                let oppTeam;
                if(i==0){
                    oppTeam=selecTool(teamNames[1]).text();
                }
                else{
                    oppTeam=selecTool(teamNames[0]).text();
                }
                // processInformation(ownTeam,oppTeam,venue,date,result,batsman,totalRuns,totalBalls,total4s,total6s,sr);

                let obj={ownTeam,oppTeam,venue,date,result,batsman,totalRuns,totalBalls,total4s,total6s,sr};
                
                const data = JSON.stringify(obj);
                fs.writeFileSync("scorecards.json",data,{flag:'a'});
                // fs.writeFileSync("scorecard.txt",data,{flag:'a'});
                // fs.writeFile("scorecard.txt",data,{flag:'a'},cb);
                // function cb(err,data){
                //     if(err){
                //         console.log("error",err);
                //     }
                //     else{
                //         fs.appendFileSync("scorecard.txt",",");
                //     }
                // }

            }    
            
        }
    
    }
    console.log("===============================================================");
    let decoration1="===============================================================\n\n";
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

function processInformation(ownTeam,oppTeam,venue,date,result,batsman,totalRuns,totalBalls,total4s,total6s,sr){

    let iplFolder=path.join(__dirname,"IPL");
    if(!fs.existsSync(iplFolder)){
        fs.mkdirSync(iplFolder);
    }
    // let teamNamePath=path.join(__dirname,"IPL",ownTeam);
    let teamNamePath=path.join(iplFolder,ownTeam);
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
        ownTeam,
        oppTeam,
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

function excelReader(playerPath,sheetName){

    let doesExist=fs.existsSync(playerPath);
    if(!doesExist){
        return [];
    }

    let workBook=xlsx.readFile(playerPath);
    let excelData=workBook.Sheets[sheetName];
    let playerObj=xlsx.utils.sheet_to_json(excelData);
    return playerObj;
}

function ecxelWriter(playerPath,jsObject,sheetName){

    // creates new book
    let newWorkBook=xlsx.utils.book_new();

    // converts an array of JS objects to worksheet
    let newWorkSheet=xlsx.utils.json_to_sheet(jsObject);

    // aapends worksheet to workbook
    xlsx.utils.book_append_sheet(newWorkBook,newWorkSheet,sheetName);
    
    xlsx.writeFile(newWorkBook,playerPath);
}



module.exports={
    gifs:getInfoFromScorecard
}