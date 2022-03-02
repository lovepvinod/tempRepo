const os = require('os')
//console.log(os)
const user = os.userInfo();
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds.`);
const currentOs = {

    name: os.type(),
    release: os.release(),
    tmem: os.totalmem(),
    fmem: os.freemem()
}
console.log(currentOs);