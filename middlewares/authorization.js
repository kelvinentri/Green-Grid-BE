const jwt =require('jsonwebtoken')

const userAuth=(req,res,next)=>{
    try{
        console.log(req.headers);
const token=req.headers['authorization'].split(' ')[1]
jwt.verify(token,process.env.JWT_PASSWORD,(err,decodedToken)=>{
    console.log({token});
    if(decodedToken){
        req.userId=decodedToken._id
        next()
    }else[
        res.status(401).json({message:'unauthorized user'})
    ]
})

    }catch(err)
{
console.log(err);
res.status(500).json(err)
}
}

const adminAuth=(req,res,next)=>{
    try{
const token=req.headers['authorization'].split(' ')[1]
jwt.verify(token,process.env.JWT_PASSWORD,(err,decodedToken)=>{
    console.log(decodedToken.role);
    if(decodedToken && decodedToken._doc.role===1){
        req.userId=decodedToken._doc._id
        next()
    }else[
        res.status(401).json({message:'unauthorized user'})
    ]
})

    }catch(err)
{
console.log(err);
res.status(500).json(err)
}
}
module.exports={userAuth,adminAuth}