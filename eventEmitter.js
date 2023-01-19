const EventEmitter=require("events");

const eventEmiiter=new EventEmitter();

eventEmiiter.on('amar',()=>{
    console.log('A Sample function is get called using a API')
})

eventEmiiter.emit('amar');

eventEmiiter.on('laptop',number=>{
    console.log(`Number function is called ${number}`)
})
eventEmiiter.emit('laptop',36);
eventEmiiter.off('laptop');