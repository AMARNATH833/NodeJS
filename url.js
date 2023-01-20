const myURL=new URL('https://example.org?8977#amar');
// myURL.pathname='/a/b/c';
// myURL.search='?d=e';
// myURL.hash='#fgh';
console.log("pathname: "+myURL.pathname);
console.log("Search :" +myURL.search);
console.log("HASH :-"+myURL.hash);

// const pathname='/a/b/c';
// const search='?d=e';
// const hash='#fgh';
// const myURL=new URL(`https://amar.org${pathname}${search}${hash}`);

// console.log(myURL.href);