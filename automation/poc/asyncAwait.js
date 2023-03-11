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


    

/*async function f(){
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
    })*/



/*async function f(){
    let promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("done !");
        },5000);
    })

    let result=await promise // wait until promise resolves
    console.log("hello");
    console.log(result);  // ALERT
}

f();
console.log("YOLO");
*/



/*
async function showAvatar() {

    // read our JSON
    // Note : fetch runs on browser , so run this code on browser
    let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
    let user = await response.json();
    console.log(user);
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    await new Promise(function(resolve,reject){
        setTimeout(resolve, 3000);
    })
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();
*/


  
  async function showAvatar() {

    // read github user 
    // Note : fetch runs on browser , so run this code on browser
    let githubResponse = await fetch(`https://api.github.com/users/GauravDeshmukh17`);
    let githubUser = await githubResponse.json();
    console.log(githubUser);  
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise(function(resolve, reject){
        setTimeout(resolve, 3000);
     })
    img.remove();
  
    // return githubUser;
  }
  
  showAvatar();



 /*try{
    console.log("I am try");
 } 
 catch(err){
    console.log(err);
 }
 finally{
    console.log("I am always executed");
 }*/


 /*try{
    throw new Error("I am Error")
 } 
 catch(err){
    console.log(err);
 }
 finally{
    console.log("I am always executed");
 }*/

 // Note : finally is always executed