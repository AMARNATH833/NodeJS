//TypeScript with node Environment !!!
function isVotable(user) {
    return user.age >= 18;
}
var justice = {
    name: 'justice',
    age: 23
};
var isJustineAnAdult = isVotable(justice);
if (isJustineAnAdult) {
    console.log(true);
}
else {
    console.log(false);
}
