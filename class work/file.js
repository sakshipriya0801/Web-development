const fs = require('fs');
fs.readFile('test.txt','utf8',(err,data)=>{
    console.log(data);
    console.error(err);
});
console.log('File reading started');   
 