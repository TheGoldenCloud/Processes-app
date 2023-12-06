const { spawn } = require('node:child_process');

let child_process = spawn('cat ./cuvanje.txt',options); //Ne postoji cuvanje.txt

child_process.stdin.write("Writted within child input",(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Data writtend in the child");
    }  
})

child_process.stdin.end();

child_process.stdout.on('data', (data,error)=>{ 
    if(error){
        console.log(error);
    }else{
        console.log(data.toString());
    }
})

// Event handleri
child_process.on('close',()=>{    //message, close...
    console.log("Chilled process ended!");
})