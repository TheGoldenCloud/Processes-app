const { spawn } = require('node:child_process');

// let child_process = spawn('cat ./cuvanje.txt',options); //Ne postoji cuvanje.txt

// child_process.stdin.write("Writted within child input",(error)=>{
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

// Event handleri
// child_process.on('close',()=>{    //message, close...
//     console.log("Chilled process ended!");
// })

//Import i export iz module odnosn oglobqalnog objekta

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