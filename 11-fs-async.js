const { log } = require('console');
const {readFile, writeFile } = require('fs')

console.log('start');
readFile('./Onenew/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./Onenew/second.txt', 'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./Onenew/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'}
        ,(err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
}) 

console.log("starting with the next one");