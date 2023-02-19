// const request=require("request");

// function yolo(){
//     var a=20;
//     function cb(){
//         console.log("Hello how are you ?");
//     }
//     setTimeout(cb,5000);
//     // setTimeout(cb,5000) => It waits for given seconds and call cb function after time finishes.
//     console.log(a);
// }
// yolo();
// let b=30;
// console.log(b);




// let url="https://www.worldometers.info/coronavirus/"; 
// function yolo(){
//     var a=20;
//     function cb(err,res,body){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Hello how are you ?");
//             console.log("statusCode is",res.statusCode);
//         }
//     }
//     request(url,cb);
//     console.log(a);
// }
// yolo();
// let b=30;
// console.log(b);




// let i=1;
// function cb(){
//     console.log(i);
//     i++;
// }
// for(let j=1;j<=10;j++){
//     setTimeout(cb,2000*j);
// }

// var b=100;



console.log("Before");
setTimeout(function(){
    console.log("time over");
},5000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(reponse){
    return reponse.json();
})
.then(function(json){
    console.log(json);
})
console.log("after");