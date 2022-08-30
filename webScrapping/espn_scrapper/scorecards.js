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
    console.log("Result : "+resultOfMatch.text());
    console.log("===============================================================");



}



module.exports={
    gifs:getInfoFromScorecard
}