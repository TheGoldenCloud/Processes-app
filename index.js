// ------- Child process -------
const { spawn,fork,exec,exit } = require('node:child_process');

// let options = {
//     shell: 'powershell.exe',
//     cwd: process.cwd()
// };

// let child_process = spawn('cat ./Tasks.txt',options);

// child_process.stdin.write("Writted within child input",(error)=>{    //Uradi write to child process
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Data writtend in the child");
//     }  
// })

// child_process.stdin.end();

// child_process.stdout.on('data', (data,error)=>{ 
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })

// //Event handleri
// child_process.on('close',()=>{    //message, close...
//     console.log("Chilled process ended!");
// })


// ------- Main process -------

// const { stdout,stdin,exit } = require('node:process');

// let questions = [
//     "What is yor name?",
//     "What is your fav color",
//     "What is your preferred programming language"
// ]

// let answers = [];

// let ask = (i) => {
//     stdout._write(`\n\n\n\ ${questions[i]}`);
//     stdout._write(`  >  `);
// } 

// stdin.on('data',(answer)=>{
//     answers.push(answer);
//     if(answers.length < questions.length){
//         ask(answers.length);
//     }else{
//         exit(0);
//     }
// });

// process.on('exit',()=>{
//     stdout.write(`${answers[0]} + ${answers[1]} + ${answers[2]}`);
// })

// ask(0);

//Import i export iz module odnosn oglobqalnog objekta


// let child = spawn('node ./child_script.js',options);
// //let child = spawn('cat ./Tasks.txt',options);

// child.stdout.on('data', (data,error)=>{ 
//     if(error){
//         process.stdout.write(error);
//     }else{
//         process.stdout.write(data.toString());
//     }
// })

// child.on('close',()=>{
//     process.stdout.write("Child process closed");
// })

//const command = 'node child_script.js';

let options = { 
    stdio: 'pipe',  //pipe nam omogucava prolaznost na stdio odnodno na izlazu kod main procesa IPC arhitektura
    shell: true 
}

//fork()
//Child Processes Fork Example w/ NodeJS & Express URADI OVAJ OVDE PRIMER

const sshConfig = {
  host: '',
  port: 22,
  username: 'zmajorama',
  privateKey: 'path-to-private-key.pem'
};

//process.stdout.write("Enter how many connecttions do you want to connect: ")

// process.stdin.on('data',(data)=>{
//     process.stdout.write(`You have chosen: ${data}`);
    
//     for(let i = 0; i <= data.toString(); i++){
//         console.log(i);
//     }


    // process.stdin.on('data',(data)=>{
    //     process.stdout.write(`You have chosen another data: ${data.toString()}`);

    // })


// })

//func
let spawnCHildConnection = (host, port, username) =>{
    const sshCommand = `ssh -p ${port} -i ${sshConfig.username}@${sshConfig.host} ${remoteCommand}`;

    const childProcess = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', sshCommand], { shell: true });
}

// // Command to run on the remote server
const remoteCommand = 'ls';

// Construct the ssh command
const sshCommand = `ssh -p ${sshConfig.port} -i ${sshConfig.privateKey} ${sshConfig.username}@${sshConfig.host} ${remoteCommand}`;

// Open a new Command Prompt window with the SSH command
const childProcess = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', sshCommand], { shell: true });

// Handle output and errors
childProcess.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

childProcess.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

childProcess.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});

