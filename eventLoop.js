const first=()=>console.log('amar')

const second=()=>console.log('nath')

const final=()=>{
    console.log("in the output display section")
    setTimeout(first,5000) // output displays only one time.
    setInterval(second,4000) //Wheares It will display the output after given interval of time.
}
final()