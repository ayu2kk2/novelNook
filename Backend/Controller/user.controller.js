// Always remember we define function in controller

import User from "../Model/user.model.js"
import bcryptjs from "bcryptjs"

//Signup
export const signup = async (req,resp) =>{
try {
const {fullname, email, password} = req.body
// destructuring 
const user = await User.findOne({email:{$eq:email}})
console.log(email)
if(user){
    return resp.status(400).json({message:"User already exists"})
} 
const hashPassword = await bcryptjs.hash(password,10)
    const createUser = new User({
        fullname:fullname,
        email:email,
        password:hashPassword,
    });
    await createUser.save()
    resp.status(201).json({message:"User created successfully",
        user:{
            _id:createUser.id,
            fullname:createUser.fullname,
            email:createUser.email
        }
    })
} catch(err) {
    console.log("Error:",err.message)
    resp.status(500).json({message:"Internal server error"})
}
}

// Login 
export const login = async(req,resp)=>{
    try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    const isMatch= await bcryptjs.compare(password,user.password)
    // await should be used here while comparing bcrypt
    if (!user || !isMatch) {
        return resp.status(400).json({message:"Invalid credentials"})
    } else {
        resp.status(200).json({message: "Login Successfully",
            user:{
        _id:user._id,
         fullname:user.fullname,
         email:user.email,

            }
        })
    }
    
    }  catch(error) {
        console.log("Error:",error)
        resp.status(500).json({message:"Internal server Error"})
    }
}