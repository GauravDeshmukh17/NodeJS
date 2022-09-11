// os -> operating syatem module

const a=require("os");

let mySystemArch=a.arch();
// console.log(mySystemArch);

let myCPUInfo=a.cpus();
// console.log(myCPUInfo);

let hostName=a.hostname();
// console.log(hostName);

console.log(a.release());

console.log(a.platform());

console.log(a.freemem());

console.log(a.totalmem());

let myRestartTimeInHours=a.uptime()/3600;
console.log(myRestartTimeInHours);

// console.log(a.userInfo())



