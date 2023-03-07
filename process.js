// import process from 'node:process';

import process from 'node:process';

process.on('beforeExit',(code)=>{
  console.log('Process beforeExit event with code ' , code);
})

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

console.log("This is will displayed first");