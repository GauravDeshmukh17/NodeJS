const puppeteer=require("puppeteer");

let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});

browserOpenPromise.then(open);

function open(browser){
    console.log("Browser is open");
}
