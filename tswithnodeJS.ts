type User={
    name:String;
    age:Number;
};

function isVotable(user:User):boolean{
    return user.age >= 18;
}

const justice:User={
    name:'justice',
    age:23,
};

const isJustineAnAdult:boolean=isVotable(justice);
if(isJustineAnAdult){
    console.log(true);
}
else{
    console.log(false)
}