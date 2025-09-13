const jwt = require('jsonwebtoken');
const {User} = require('../model/user.model');


 const signup = async (req, res)=>{

try {
    const {firstName, lastName, email, password } = req.body
    const findUser = await User.findOne({email})
    if(findUser){
        return res.send("Email already exist")
    }
    await User.create({
        firstName,
        lastName,
        email,
        password
    })
    return res.send("user successfully added")
} catch (error) {
    return res.status(500).send("internal server error")
}
}
const login = async(req, res) =>{
    const {email, password} = req.body
    const findUser = await User.findOne({email:email})
    if(!findUser) {
        return res.send("user not found")
    }
    if(password !== findUser.password){
        return res.send("password does match try again later")
    } 
    const tokenData = {
        _id:findUser._id,
        firstName:findUser.firstName,   
        lastName:findUser.lastName
    }
    const createToken = jwt.sign(tokenData ,process.env.SECRET, { expiresIn: '1h' });
    return res.send({token:createToken})
}


module.exports = {signup,login}