const { stdout,stdin,exit } = require('node:process');

// process.stdin.on('data',(data)=>{
//     console.log(data)
// })

// process.stdin.on('end', () => {
//     console.log('No more data to read.');
// });
// stdout.write("Dispalyed from child process");

// process.on('message',(message)=>{
//     console.log(message);
// })

console.log("Hello from child");

process.stdin.on('data',(data)=>{
    console.log(data)
})

