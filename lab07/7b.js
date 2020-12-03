const fs = require('fs');


const pathFile = "D:\\5sem\\TIN\\tin\\lab07\\dir\\";

fs.watch(pathFile, (eventType, filename) => {
    if (eventType === 'change') {
        fs.readFile(pathFile + filename, (error, content) => {
            if (error) {
                console.log("error! " + error);
            }
            console.log("the file named " + filename + " was modified");
            console.log("the content of the file: " + content);
        });
    }
})