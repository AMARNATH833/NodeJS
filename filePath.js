
const path = require('path');
const pathway='/home/asplap3247/Desktop/SHORTcutz.txt'
const file=('/foo', 'bar', 'baz/asdf', 'quux', '..');

console.log(pathway);//Just console for printing....

console.log(path.dirname(pathway)) //to display the parent folder of the file.

console.log(path.basename(pathway)) //to display the file name

console.log(path.extname(pathway)) //to display the type of the file.

console.log(process.env.PATH) //to provide platform specific path delimiter....

console.log("It is Absolute PATH? "+path.isAbsolute('c:/foo/..')) // to find it is a absolute path or not...

console.log("join  :"+path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // to join all the segments of the path and return the specific path!!!

console.log("normalize  :"+path.normalize('/foo/bar//baz/asdf/quux/..'))