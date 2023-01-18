const hello=()=>console.log("first")
const world=()=>console.log("second")

const program=()=>{
    console.log("in the function section")
    new Promise((resolve,reject)=>resolve('problem resolved:')).then(resolve=>console.log(resolve))
    world()
}
program()