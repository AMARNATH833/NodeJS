const fs=require('fs');
console.log("This is AMARNATH FROM LAMP!")

fs.writeFileSync("mugesh.txt","Hi This is Amarnath , this file is created by command!")

// to get the Directive Name 
console.log(__dirname);

// to get the Directive Name along with File Name :)
console.log(__filename);