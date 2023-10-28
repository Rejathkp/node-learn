function Destrary(req,res){
    const {id,name,age,place} = req.body
    console.log(id,name,age,place);
    res.json({id,name,age,place})
}
module.exports=Destrary