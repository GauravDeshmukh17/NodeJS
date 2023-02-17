const request=require("request");

function yolo(){
    var a=20;
    function cb(){
        console.log("Hello how are you ?");
    }
    setTimeout(cb,5000);
    // setTimeout(cb,5000) => It waits for given seconds and call cb function after time finishes.
    console.log(a);
}

yolo();
let b=30;
console.log(b);



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


