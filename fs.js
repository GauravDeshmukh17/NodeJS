// fs -> fs is file system module

const a=require("fs");

// appendFileSync() appends data in file , and creates the file if it is not created

// let res=a.appendFileSync("file1.txt","Hello World!\n");
// res=a.appendFileSync("file1.txt","I am file1.txt\n");
// console.log(res);

// readFileSync() reads the file

// let ans=a.readFileSync("file1.txt");
// console.log(ans);
// console.log(ans+"");

let ans=a.readFileSync("file1.txt","utf-8");
console.log(ans);


const store=require("../JS/temp");
// console.log(store);
// let get=store.add+"";
// console.log(get);

let ans1=store.arr;
console.log(ans1);

let ans2=store.sub(56,78);
console.log(ans2);

let ans3=store.arr["4"];
console.log(ans3);

let ans4=store.name;
console.log(ans4);


