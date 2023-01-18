const first=()=>console.log('amar')

const second=()=>console.log('nath')

const final=()=>{
    console.log("in the final section")
    setTimeout(first,5000) // output displays only one time after given interval of time.
    setInterval(second,4000) //Wheares It will display the output after given interval of time.
}
final()