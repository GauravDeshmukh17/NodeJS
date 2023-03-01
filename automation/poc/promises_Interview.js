const fs=require("fs");

// reading f1.txt f2.txt and f3.txt serially using promises

/*let f1WillBeReadPromise=fs.promises.readFile("f1.txt");
f1WillBeReadPromise
    .then(function(dataf1){
        console.log(dataf1+"");
        let f2WillBeReadPromise=fs.promises.readFile("f2.txt");
        return f2WillBeReadPromise;
    })
    .then(function(dataf2){
        console.log(dataf2+"");
        let f3WillBeReadPromise=fs.promises.readFile("f3.txt");
        return f3WillBeReadPromise
    })
    .then(function(dataf3){
        console.log(dataf3+"");
        console.log("All files read");
    })
    .catch(function(err){
        console.log(err);
    })*/


    // reading f1.txt f2.txt and f3.txt parallelly using promises

    let f1p=fs.promises.readFile("f1.txt");
    let f2p=fs.promises.readFile("f2.txt");
    let f3p=fs.promises.readFile("f3.txt");

    f1p.then(cb);
    f2p.then(cb);
    f3p.then(cb);

    function cb(data){
        console.log(data+"");
    }
