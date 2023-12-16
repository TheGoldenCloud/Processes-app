const LinkedList = require("../Extras/LinkedList");
const Node = require("../Extras/LinkedList");
const { exit } = require('node:process');

process.on('message',(mess)=>{

    const linkedList = new LinkedList();

    let processedData = [];
    
    for(let i = 1; i <= mess; i++){
        linkedList.append(Math.floor(Math.random() * 9999999999999999999999999));
    }

    processedData = linkedList.display();

    process.send(processedData);

    exit(0);
})

//process je ustvari child process
console.log('Child created \n', process.pid);

process.on('exit',()=>{
    console.log("End");
})