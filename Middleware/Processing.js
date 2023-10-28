function Processing (req, res, next)
{
    if (req.token)
    {
        console.log("Token Processing.....");
        next()
        return;
    }
}
module.exports=Processing;
