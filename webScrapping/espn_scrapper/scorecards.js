const request=require("request");
const cheerio=require("cheerio");

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
    console.log("Venue :"+descArr[1]);


    // get date
    console.log("Date :"+descArr[2]+descArr[3]);


    // get result
    let resultOfMatch=selecTool('p[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"]');
    console.log("Result : "+resultOfMatch.text()+"\n");


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
                console.log("Batsman : "+selecTool(eachCol[0]).text());
                console.log("Total Runs : "+selecTool(eachCol[2]).text());
                console.log("Total Balls : "+selecTool(eachCol[3]).text());
                console.log("Total 4's : "+selecTool(eachCol[5]).text());
                console.log("Total 6's : "+selecTool(eachCol[6]).text());
                console.log("Strike Rate(SR) : "+selecTool(eachCol[7]).text());
                console.log("Team : "+selecTool(teamNames[i]).text());
                console.log();
            }
            else{
                // do nothing
            }
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



module.exports={
    gifs:getInfoFromScorecard
}