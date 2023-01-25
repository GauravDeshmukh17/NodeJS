const puppeteer=require("puppeteer");

let email="india17032001@gmail.com";
let password="@17MARCH2001";
let cTab;

let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});

browserOpenPromise
    .then(function(browser){
        console.log("Browser is open");
        // console.log(browser);    
        let allTabsPromise=browser.pages();
        return allTabsPromise;
    })
    .then(function(allTabsArr){
        cTab=allTabsArr[0];
        console.log("new tab");
        let visitngLoginPagePromise=cTab.goto("https://www.hackerrank.com/auth/login");
        return visitngLoginPagePromise;
    })
    // .then(function(){
    //     let loginThroughGoogle=cTab.click('button[data-analytics="SignupGoogle"]');
    //     return loginThroughGoogle;
    // })
    // .then(function(){
    //     console.log("Login Through Google");
    // })
    .then(function(){
        console.log("Hackerrank login page opened");
        let emailWillBeTypedPromise=cTab.type('input[name="username"]',email);
        return emailWillBeTypedPromise;
    })
    .then(function(){
        console.log("Email Typed");
        let passwordWillBeTypedPromise=cTab.type('input[name="password"]',password);
        return passwordWillBeTypedPromise;
    })
    .then(function(){
        console.log("Password Typed");
        let loginWillBeDonePromise=cTab.click('button[type="submit"]');
        loginWillBeDonePromise;
    })
    .then(function(){
        console.log("HackerRank Login Done !");
        let algorithmTabWillBeOpenendPromise=WaitAndClick('div[data-automation="algorithms"]');
        return algorithmTabWillBeOpenendPromise;
    })
    // .then(function(){
    //     console.log("Algorithm Tab Opened");
    //     let solveChallengeWillBeOpened=WaitAndClick('button[class="ui-btn ui-btn-normal primary-cta ui-btn-primary ui-btn-styled"] .ui-text')
    //     return solveChallengeWillBeOpened;
    // })
    // .then(function(){
    //     console.log("Solve Challlenge Page Opened");
    //     let submitCodePromise=WaitAndClick('button[class="ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled"] .ui-text');
    // })
    // .then(function(){
    //     console.log("Code Submitted Successfully !");
    // })
    .then(function(){
        console.log("Algorithm Tab Opened");
        let allQuesPromise=cTab.waitForSelector('a[data-analytics="ChallengeListChallengeName"]');
        return allQuesPromise;
    })
    .then(function(){
        function getAllQuesLink(){
            let allAnchorElementsArr=document.querySelectorAll('a[data-analytics="ChallengeListChallengeName"]');
            
            let linksArr=[];
            for(let i=0;i<allAnchorElementsArr.length;i++){
                linksArr.push(allAnchorElementsArr[i].getAttribute('href'));
            }

            return linksArr;
        }

        let linksArrPromise=cTab.evaluate(getAllQuesLink);
        return linksArrPromise;
    })
    .then(function(linksArr){
        console.log(linksArr);
    })
    .catch(function(err){
        console.log(err);
    })
    
function WaitAndClick(selector){
    let myPromise=new Promise(function(){
        let waitForSelectorpromise=cTab.waitForSelector(selector);

        waitForSelectorpromise
        .then(function(){
            let clickPromise=cTab.click(selector);
            return clickPromise;
        })
    })

}