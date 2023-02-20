/*function createPromise(){
    let myPromise=new Promise(function(resolve,reject){
        let num1=1;
        let num2=1;
        let string="Values are equal to 2";
    
        if(num1+num2==2){
            resolve(string);
        }
        else{
            reject("Values are not equal");
        }
    })

    return myPromise;
}

createPromise.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})*/


function greet(msg){
    let myPromise=new Promise(function(resolve,reject){
        if(msg=="hello"){
            resolve("hello");
        }
        else{
            reject("Incorrect message")
        }
    })

    return myPromise;
}

function greet2(msg2){
    return new Promise(function(resolve,reject){
        if(msg2=="hello") {
            resolve(msg2+" Well done !");
        }
        else{
            reject("Sorry "+msg2);
        } 
    })
}

greet("hello")
    .then(function(data){
        let store=greet2(data);
        return store;
    })
    .then(function(data){
        let store=greet2(data);
        return store;
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        let store=greet2(err);
        return store;
    })
    .catch(function(err){
        let store=greet2(err);
        return store;
    })
    .catch(function(err){
        console.log(err);
    })
    
