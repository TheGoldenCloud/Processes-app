const express = require('express');
const app = express();
const port = 4000;
const { fork } = require('node:child_process');
const { Worker } = require('node:worker_threads'); 

app.get('/child/linkedList/:number', (req, res) => {

    let child_process = fork('./Childs/child.js');

    child_process.send(req.params.number);

    child_process.on('message',(procMess)=>{
        res.json(procMess);
    })
});

app.get('/thread/linkedList/:number', (req, res) => {

    let thread = new Worker('./Threads/Thread.js');

    thread.postMessage(req.params.number);

    thread.on('message',(data)=>{
      res.json(data);
    })    
});

// app.get('/connect/:port/:username/:host', (req, res) => {

//   const conf = {
//     host: req.params.host,
//     port: req.params.port,
//     username: req.params.username,
//     privateKey: 'path-to-private-key.pem'
//   };

//   const sshCom = `ssh -p ${conf.port} ${conf.username}@${conf.host}`;
  
//   const childProcess = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', sshCom], { shell: true });
  
//   childProcess.stdout.on('data', (data) => {
//     console.log(`Output: ${data}`);
//   });
  
//   childProcess.stderr.on('data', (data) => {
//     console.error(`Error: ${data}`);
//   });
  
//   childProcess.on('close', (code) => {
//     console.log(`Process error code ${code}, process exited`);
//   });
// });

app.get('/connect/:port/:username/:host', (req) => {  //Probaj sa clusterom!!!

  const conf = {
    host: req.params.host,
    port: req.params.port,
    username: req.params.username,
  };

  const sshCom = `ssh -p ${conf.port} ${conf.username}@${conf.host}`;
  
  const childProcess = fork('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', sshCom], { shell: true });
  
  childProcess.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
  });
  
  childProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });
  
  childProcess.on('close', (code) => {
    console.log(`Process error code ${code}, process exited`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});