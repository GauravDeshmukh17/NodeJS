let myPromise=new Promise(function(resolve,reject){
    let num1=1;
    let num2=12;
    let string="Values are equal";

    if(num1+num2==2){
        resolve(string);
    }
    else{
        reject("Values are not equal");
    }
})

myPromise.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})