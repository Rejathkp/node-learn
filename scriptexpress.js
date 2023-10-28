// const {set,name} = require('./test');

// console.log(set())
// console.log(name);


// const express = require("express")

// const app = express();

// app.get("/about",(req,res)=>
// {
//     res.send("<h1>Welcome</h1>");
// });

// app.get("/sample",(req,res)=>
// {
//     res.send("<h1>WELCOME TO NODE</h1>");
// });

// app.get("*",(req,res)=>
// {
//     res.status(404)
//     res.send("<h1>Error 404 Found</h1>")
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))

//-----------------------------------------html file content reading-----------------------------------------------------//


// const express = require("express")
// const path = require("path")
// const app = express();

// app.get ("/",(req,res)=>
// {
//     res.json("<h1>Welcome</h1>")
// });

// app.get("/index",(rew,res)=>{
//     res.sendFile(path.join(__dirname,"api","user.html"));
// });

// app.get("/profile",(rew,res)=>{
//     res.sendFile(path.join(__dirname,"api","profile.html"));
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))


//-----------------------------------Easiest method(static method(use))for different files-------------------------//


// const express = require("express")
// const app = express();

// app.use(express.static("api"))

// app.use("/",(req,res)=>{
//         res.status(404)
//         res.send("<h1>Error 404 Found</h1>");
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//------------------------------json format-------------------------------------------//

// const express = require("express")
// const app = express();

// app.get("/contact",(req,res)=>{
//         res.send("<h1>Contact</h1>");
// });

// app.get("/",(req,res)=>{
//         res.json({user:"Gotham"})
// })

// app.get("*",(req,res)=>{
//         res.status(404)
//         res.send("<h1>404</h1>")
// })

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//------------------------------------Middleware custom--------------------//

// const express = require("express")
// const app = express();
//         // const token="123";
// app.get("/user", Token, (req,res)=>{
//         console.log("User logged");
//         res.send("<h1>Middle ware </h1>");
// //next();
// });

// function Token (req,res,next) {
// console.log("Creating Tokens")
// next();
// }

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//-----------------------------------------------------------------------------------------------------------//


// const express = require("express")
// const app = express();

// app.get("/home", Token, Validation, Finished, (req,res) =>{
//         console.log("User logged ");
//         res.send("<h1>Middle ware </h1>");
//         console.log("Home page ")
// });

// function Token (req, res, next) {
//         console.log("Creating Tokens...")
//         setInterval(function(){ next();},5000)
// }

// function Validation (req,res, next)
// {
//         console.log("Token Approved...")
//         setInterval(function()
//         { next();},5000)
// }

// function Finished (req,res, next)
// {
//         console.log("Token Completed...")
//         next();
// }


// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//----------------------------------------------------------------------------------------------------------------------//


// const express = require("express")
// const app = express();

//         app.get("/user", Token, Validation, (req,res) =>
//         {
//                 res.send("<h1>Middle ware </h1>");
//                 console.log("User logged ");
//         });

//         function Token (req,res,next) {

//                 console.log("Creating Tokens......")
//                 req.token=true
//                 next();
//         }

//         function Validation (req,res,next)
//         {
//                 if (req.token)
//                 {
//                 console.log("Token Approved . . . . . . .")
//                 next();
//                 }
//                 else{
//                 console.log("No Token");
//                 res.send("<h1>0ooooopppss........No Token")
//                 }
//         }

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//--------------------------------------------Middleware timeout2------------------------------------//

// const express = require("express")
// const app = express();

// app.get("/home", Token, Validation, Finished, Processing, (req,res) =>{
//         console.log("User logged ");
//         res.send("<h1>Middle ware </h1>");
//         console.log("Home page ")
// });

// function Token (req, res, next) {
//         console.log("Creating Tokens...")
//         setInterval(function(){ next();},5000)
// }

// function Validation (req,res, next)
// {
//         console.log("Token Approved...")
//         setInterval(function()
//         { next();},5000)
// }

// function Finished (req,res, next)
// {
//         console.log("Token Completed...")
//         setTimeout(function(){ next();},10000)
        
// }

// function Processing (req,res, next)
// {
//         console.log("Token Processing...")
//         next();
// }

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))



//-----------------------------------------------------------------------------------------------------------------//


// const express = require("express")
// const app = express();

// const Token=require("./Middleware/Token")
// const Validation=require("./Middleware/Validation")

//         app.get("/home", Token, Validation, (req,res) =>
        
//         {
//                 res.send("<h1>User Created..... </h1>");
//                 console.log("User logged ");
//         });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))


//------------------------------------------------------------------------------------------------------------//


// const express = require("express")
// const app = express();

// const Token=require("./Middleware/Token")
// const Validation=require("./Middleware/Validation")
// const Processing=require("./Middleware/Processing")

// const middleware=[Token,Validation,Processing]

//         app.get("/home", middleware, (req,res) =>
        
//         {
//                 res.send("<h1>User Created..... </h1>");
//                 console.log("User logged ");
//         });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))


//-----------------------------------------------------------------------------------//

// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post("/about", (req, res) => {
//     const { Name,Age,Place } = req.body; 
    
//     const response={Name,Age,Place}

//     res.send(response.Name);

// });

// app.get("*", (req, res) => {
//     res.json("data not available");
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));


//-------------------------------------------------------------------------------------//


// const express = require("express");
// const app = express();

// const data=[{id:1,name:"Imthyaz",age:21},
//             {id:2,name:"Shibily",age:23},
//             {id:3,name:"Razim",age:22},
//             {id:4,name:"Uvais",age:25}]

// app.get("/view",(req,res)=>{
//     res.send(data)
// })


// app.get("/filter/:id",(req,res)=>{
    
//     const username=parseInt(req.params.id)
//     const datas=data.filter(val=>val.id===username)
//     console.log(datas);
//     res.json(datas)
// })

// app.get("/filter/:name",(req,res)=>{
    
//     const username=req.params.name
//     const datas=data.filter(val=>val.name===username)
//     console.log(datas);
//     res.json(datas)
// })

// app.get("*",(req,res)=>{
//     res.json("data not available")
// })


// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));


//----------------------------------Router----------------------------------//

const express = require("express");
const router = require("./Router/Testing");
const app = express();

app.use(express.json())
app.use('/',router)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON ${PORT}`));