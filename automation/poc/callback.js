const fs=require("fs");

// Question 1 => read files f1.txt then f2.txt then f3.txt
fs.readFile("f1.txt",function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        setTimeout(function(){
            console.log("hello how are you ?");
        },2000);
        console.log(res+"");
        fs.readFile("f2.txt",function cb2(err,res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res+"");
                fs.readFile("f3.txt",function cb3(err,res){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(res+"");
                        console.log("All files read");
                    }
                });
            }
        });
    }
});


// 1. solution of callback hell
// 1st way to overcome callback hell is to sepetate the functions
/*fs.readFile("f1.txt",cb1);

function cb1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
        fs.readFile("f2.txt",cb2);
    }
}

function cb2(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
        fs.readFile("f3.txt",cb3);
    }
}

function cb3(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
        console.log("All files read");
    }
}*/

// --------------------------------------------------------------------------------
// Question 2 => read f1.txt , f2.txt and f3.txt parallelly

/*fs.readFile("f1.txt",function(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
    }
});
fs.readFile("f2.txt",function(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
    }
})
fs.readFile("f3.txt",function(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
    }
})*/

//  OR

/*fs.readFile("f1.txt",cb);
fs.readFile("f2.txt",cb);
fs.readFile("f3.txt",cb);

function cb(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res+"");
    }
}*/