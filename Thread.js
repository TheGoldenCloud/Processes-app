const { parentPort } = require('node:worker_threads');
const LinkedList = require("./LinkedList");

parentPort.on('message',(data)=>{
    const linkedList = new LinkedList();

    let processedData = [];

    for(let i = 1; i <= data; i++){
        linkedList.append(Math.floor(Math.random() * 9999999999999999999999999));
    }

    processedData = linkedList.display()

    parentPort.postMessage(processedData);
})

