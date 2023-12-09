const express = require('express');
const app = express();
const port = 4000;
const { fork } = require('node:child_process');

app.get('/:id', (req, res) => { //NASTAVI

    let child_process = fork('child.js');

    child_process.send(req.params.id);

    child_process.on('message',(procMess)=>{
        res.json(procMess);
    })

});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});