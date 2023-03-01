/*function f(){
    return new Promise(function(resolve,reject){
        let arr=[1,2,3,"Hello",4,5];
        resolve(arr);
    })
}

f()
    .then(function(arr){
        console.log(arr);
    })
    .catch(function(err){
        console.log(err);
    })*/


async function f(){
    let arr=[1,2,3,"Hello",4,5];
    return arr;
}

// let asyncf=f();
// asyncf
f()
    .then(function(arr){
        console.log(arr);
    })
    .catch(function(err){
        console.log(err);
    })



