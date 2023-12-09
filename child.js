process.on('message',(mess)=>{
    let processedData = isPrime(mess);
    process.send(processedData);

    //console.log(`This is message from main process ${mess} \n`);
})

//process je ustvari child process
//console.log('Child created \n', process.pid);

let isPrime = (n) => {
    const factors = [];

    if(n < 1) return false;
    if(n == 1) return false;

    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }

    return { n ,factors, isPrime: ( factors.length > 0? false : true)}
}