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
    //     console.log("Login Through Google");
    //     let loginThroughGoogle=cTab.click('button[data-analytics="SignupGoogle"]');
    //     return loginThroughGoogle;
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
        
    })
    .catch(function(err){
        console.log(err);
    })
    
