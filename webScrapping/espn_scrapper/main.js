let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request=require("request");
const cheerio=require("cheerio");
const data=require("./allMatch");

request(url,cb);

function cb(err,res,body){

    if(err){
        console.log("error",err);
    }
    else{
        handleHTML(body);
    }
}

function handleHTML(html){

    let selecTool=cheerio.load(html);
    let anchorElem=selecTool('a[href="/series/ipl-2020-21-1210595/match-schedule-fixtures-and-results"]');
    // console.log(anchorElem);

    // attr -> method of getting attribute and their value  
    let relativeLink=anchorElem.attr("href");
    // console.log(relativeLink);

    let fullLink="https://www.espncricinfo.com"+relativeLink;
    // console.log(fullLink);

    data.matchData(fullLink);
}

