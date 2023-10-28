const http = require ("http");
//server create in create server method it returns another method it takes 2 parameter request and response

// http.createServer((req,res)=>{
//     res.write('This is node.js');
//     console.log(req.url);
//     res.end();
//     console.log("Text")
//     console.log("Hello")

// }).listen (4000, () => console.log("Server running"));


// ---- server creates another method ---- //

// const server=http.createServer((req,res)=>{
//     res.write('Hello world ');
//     console.log(req.url);
//     console.log("Test");
//     res.end();
// });

// const PORT= process.env.PORT || 4000;
    
// server.listen (PORT, () => console.log(`Server running on ${PORT}`));


// const server=http.createServer ((req,res) =>{
//     res.writeHead (200, {'Content-type':"text/html"});
//     res.end("<h1>Welcome</h1>"); 
//     });
//     const PORT= process.env.PORT || 5000;
//     server.listen (PORT, () => console.log(`Server running on ${PORT}`));


const path = require("path")
const fs = require("fs")

// const server=http.createServer ((req,res) => {

//     fs.readFile(path.join(__dirname, "api", "profile.html"),"utf8",(err,data) =>
//         {
//             if(err) throw err;
//             res.writeHead (200, {'Content-type': "text/html"});
//             res.end(data);
//             console.log(data)
//         })
//     });
// const PORT= process.env.PORT || 4000;

// server.listen(PORT,()=>console.log(`Server running on ${PORT}`));


const server=http.createServer ((req,res) => {

    if(req.url==="/")
    {
        fs.readFile(path.join(__dirname, "api", "new.html"),"utf8",(err,data) =>
            {
                if(err) throw err; 
                res.end(data);
                
            })
    }
    if(req.url==="/about")
    {
        fs.readFile(path.join(__dirname, "api", "about.html"),"utf8",(err,data) =>
            {
                if(err) throw err; 
                res.end(data);
                
            })
    }
    console.log(req.url)    
    });
const PORT= process.env.PORT || 4006;

server.listen(PORT,()=>console.log(`Server running on ${PORT}`));