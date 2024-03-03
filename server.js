const http = require('http');
const fs = require('fs');

//  crud ==> create , read , update , delete

http.createServer((req,res)=>{
    // fs.readFile('demo.html',(err,data)=>{
    //     if(err) throw err;
        
    // res.writeHead(200,{'content-type':'text/html'});
    // res.write(data);
    // res.end();
    // })

    // fs.appendFile(
    //     'myText.txt',
    //     'this is text file that contain some words!\n',
    //     (err)=>{
    //         if(err) throw err;
    //         console.log("Saved!");
    //     });

    // fs.writeFile("myText.txt","hello content!",(err)=>{
    //     if (err) throw err;
    //     console.log("Saved!");
    // })

    fs.unlink('myText.txt',(err)=>{
        if(err) throw err;
        console.log("file deleted!");
    })

}).listen(8080);