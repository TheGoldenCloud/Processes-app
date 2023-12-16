const express = require('express');
const app = express();
const port = 4000;
const { fork } = require('node:child_process');
const { Worker } = require('node:worker_threads'); 

app.get('/child/linkedList/:number', (req, res) => {

    let child_process = fork('child.js');

    child_process.send(req.params.number);

    child_process.on('message',(procMess)=>{
        res.json(procMess);
    })
});

app.get('/thread/linkedList/:number', (req, res) => {

    let thread = new Worker('./Thread.js');

    thread.postMessage(req.params.number);

    thread.on('message',(data)=>{
      res.json(data);
    })    

});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});