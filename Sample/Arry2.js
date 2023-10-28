function Arry2(req,res) {
    const ary=[{id:1,name:"Khushi",age:30},{id:2,name:"Jacob",age:30},{id:3,name:"Sagar",age:26}]

    // const datage=parseInt(req.params.age)
    // const age=ary.find(val=>val.age==datage)
    // const age=ary.filter(val=>val.age==datage)
    // console.log(age);
    // res.json(age)

    const dataname=req.params.name
    const nme=ary.find(val=>val.name==dataname)
    console.log(nme);
    res.json(nme)
    
}
module.exports=Arry2