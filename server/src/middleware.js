import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req,res,next)=>{

try {
    const token = await req.headers.authorisation.split(' ')[1]
    const { userId } = jwt.verify(token, "JWT_SECRET")
    req.user = userId
    next()
} catch (error) {
    return res.json({message:"User not authorised"})
}
}