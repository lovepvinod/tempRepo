const { readFile, writeFile } = require('fs');
const { devNull } = require('os');
console.log("start")
readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return null
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return null
        }
        const second = result

        writeFile('./content/result-async.txt', `here is async result: ${first}, ${second}`, (err, result) => {
            if (err){
                console.log(err)
                return
            }
            console.log("async:: done with the task")
        })
    });
});

console.log("async:: starting with the next task")