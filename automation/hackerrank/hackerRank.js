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
        console.log("Got all links");
        let questionWillBeSolvedPromise=questionSolver(linksArr[0],0);
        return questionWillBeSolvedPromise;
    })
    .then(function(){
        console.log("Question is solved");
    })
    .catch(function(err){
        console.log(err);
    })

    
function questionSolver(url,idx){
    return new Promise(function(resolve,reject){
            let fullLink=`https://www.hackerrank.com${url}`;
            console.log(fullLink);
            let goToQuesPagePromise=cTab.goto(fullLink);
            goToQuesPagePromise
                .then(function(){
                    console.log("Question opened");
                    let languageSelection=WaitAndClick('.css-19bqh2r');
                    return languageSelection;
                })
                .then(function(){
                    console.log("Language selection");
                    let typeJavaLanguagePromise=cTab.type('.css-1hwfws3',"java");
                    return typeJavaLanguagePromise;
                })
                .then(function(){
                    console.log("Java Typed");
                    let pressEnterPromise=cTab.keyboard.press('Enter');
                    return pressEnterPromise;
                })
                .then(function(){
                    console.log("Enter pressed");
                    let leaveEnterPromise=cTab.keyboard.up("Enter");
                    return leaveEnterPromise;
                })
                .then(function(){
                    console.log("Enter leaved");
                    resolve();
                })
                .catch(function(err){
                    reject(err);
                })
        })
    }

function WaitAndClick(selector){
    let myPromise=new Promise(function(resolve,reject){
        let waitForSelectorpromise=cTab.waitForSelector(selector);

        waitForSelectorpromise
        .then(function(){
            let clickPromise=cTab.click(selector);
            return clickPromise;
        })
        .then(function(){
            resolve();
        })
        .catch(function(err){
            reject(err);
        })
    })
    return myPromise;
}

