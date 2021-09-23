var fs = require("fs")
var myArgs = process.argv.slice(2);
console.log(myArgs)
console.log(myArgs[0][0])
console.log(typeof (myArgs[0]))
console.log(myArgs[0].slice(0, 12))
console.log(myArgs[0].slice(0, 16) == "fs.writeFileSync")
for (let i = 0; i < myArgs.length ; i++) {
    if (myArgs[i].slice(0,12) == "fs.writeFile")
    {
        console.log("hritik")
        fs.writeFile("prog.txt", "created", err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })
    }
    else if (myArgs[i].slice(0, 11) == "fs.readFile")
    {
        console.log("reading")
         fs.readFile('prog.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(data)
        })
    }
    else if (myArgs[i].slice(0, 13) =="fs.appendFile")
    {
        fs.appendFile("prog.txt", "Updated", err => {
            if (err) {
                console.error(err)
                return
            }
            
        })
    }
    else
    {
        fs.unlink("prog.txt", err => {
            if (err) {
                console.error(err)
                return
            }
       
        })
    }
}