// console.log("hello")

// const neww ="World";
// console.log(neww)

// const ary= [1,2,3,4,5]
// console.log(ary)
// console.log(ary[2]);

// const alp= ['a','b','c']
// alp.push('d')
// console.log(alp);

// const alp1=[...alp,"e"]
// console.log(alp1);

// alp1.pop()
// console.log(alp1);

// function samp() {
//     console.log(7);
// }
//  samp();

// let a=5;
// let b=6;
// let c;
// function myfun(){
//     c=a+b;
//     console.log(c);
//     return ("it is running")
// }
// console.log(myfun()); 

// const myfunc= () => {  
//     let d=12;
//     let e=17;
//     let f;
//     f=e-d;
//     console.log(f)
// }
// myfunc();
// setInterval(() => {
//     console.log("Interval at 1 sec")
// }, 1000);

// setTimeout(() => {
//     console.log('Timeout at 3 sec');
// }, 4000);
// const interval=setInterval(() => {
//     console.log("Interval at 2 sec")
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 9000);

// const timer=() => 
// {
//     console.log("timeout at 7sec")
// }

// setTimeout(() => {
//     clearInterval(timer)
// },7000);

const path = require("path")

// console.log(path.basename(__filename));     //getfilename
// console.log(path.extname(__filename));      //file extension
// console.log(path.dirname(__filename));      //file directory name
// console.log(path.parse(__filename));        //get a object of all files
// console.log(path.parse(__filename).name);   //to select the value name from object
// console.log(path.join(__dirname,"app2"));   //for path joining

const fs = require("fs")

// fs.mkdir(path.join(__dirname,"/Newdir"),{},(err)=>{if(err) throw err;});

// fs.mkdir(path.join(__dirname,"/Newdir1"),{},(err)=>{if(err) throw err;});

// fs.mkdir(path.join(__dirname,"/Newdir/Testfile1"),{},(err)=>{if(err) throw err;});

// fs.rmdir(path.join(__dirname,"/Newdir1"),{recursive:true},(err)=>{if(err) throw err;});

// fs.writeFile(path.join(__dirname,"/Newdir","test.txt"),"User name: Swathi",(err)=>{if(err) throw err;})

// const user= "Hari"
// fs.appendFile(path.join(__dirname,"/Newdir","test.txt"),`User name:${user}`,(err)=>{if(err) throw err;})

// const user= "Abhi"
// fs.appendFile(path.join(__dirname,"/Newdir","test1.txt"),` \n \t User name:${user}`,(err)=>{if(err) throw err;})

// fs.mkdir(path.join(__dirname,"/api"),{},(err)=>{if(err) throw err;});
// fs.writeFile(path.join(__dirname,"/api","api.txt"),"User name: Krishna",(err)=>{if(err) throw err;})
// fs.readFile(path.join(__dirname,"/api","api.txt"),{},(err,data)=>{if(err) throw err;
// console.log(data)});

// fs.readFile(path.join(__dirname,"/api","api.txt"),"utf8",(err,data)=>{if(err) throw err;
//     console.log(data)});


