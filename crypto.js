const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Hi This is Amarnath')  
                   .digest('hex');  
console.log(hash);  