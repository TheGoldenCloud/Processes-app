const express = require('express');
const app = express();
const port = 4000;
const { fork } = require('node:child_process');

app.get('/linkedList/generate/:number', (req, res) => {

    let child_process = fork('child.js');

    child_process.send(req.params.number);

    child_process.on('message',(procMess)=>{
        res.json(procMess);
    })
});

// app.get('/linkedList/:number', (req, res) => {

//     let child_process = fork('child.js');

//     child_process.send(req.params.number);

//     child_process.on('message',(procMess)=>{
//         res.json(procMess);
//     })
// });

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});