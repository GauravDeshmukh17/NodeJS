const request=require("request");
const cheerio=require("cheerio");
const {gifs}=require("./scorecards");

function getAllMatch(url){

    request(url,cb);
}

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }
    else{
        allMatchLink(body);
    }
}


function allMatchLink(html){

    let selecTool=cheerio.load(html);

    let scorecardArr=selecTool('div[class="ds-grow ds-px-4 ds-border-r ds-border-line-default-translucent"]>a');

    // console.log(scorecardArr.length);
    // console.log(scorecardArr);

    for(let i=0;i<scorecardArr.length;i++){
        let eachMatchLink=selecTool(scorecardArr[i]).attr("href");
        // console.log(i+1+") "+eachMatchLink);
        let fullLink="https://www.espncricinfo.com"+eachMatchLink;
        // console.log(fullLink);
        gifs(fullLink);
        break;
    }


}



module.exports={
    matchData:getAllMatch
}