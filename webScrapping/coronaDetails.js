const request=require("request");
const cheerio=require("cheerio");

request("https://www.worldometers.info/coronavirus/",cb);

function cb(err,res,body){
    if(err){
        console.log("error",err);
    }
    else{
        handleHtml(body);
    }
}

function handleHtml(html){

    let selecTool=cheerio.load(html);

    let details=selecTool(".maincounter-number");
    // console.log(details);
    // console.log(details.text());

    let totalCases=selecTool(details[0]).text();
    console.log("Total Cases => "+totalCases);

    let totalDeaths=selecTool(details[1]).text();
    console.log("Total Deaths =>"+totalDeaths);

    let totalRecovered=selecTool(details[2]).text();
    console.log("Total Recovered =>"+totalRecovered);
}


