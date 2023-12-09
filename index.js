// ------- Child process -------
const { spawn,fork,exec } = require('node:child_process');

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

