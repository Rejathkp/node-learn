function Token (req,res, next)
{
    console.log("Token Creating.......");
    req.token=true
    next()
    return;
}

module.exports=Token;
