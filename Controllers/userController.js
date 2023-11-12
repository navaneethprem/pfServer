const users = require('../Models/userSchema')

//  register
exports.register = async(req,res)=>{
    console.log('Inside register controller function');
    const {username,email,password} = req.body
    // console.log(`${username}, ${email}, ${password}`);

    try{const existinguser = await users.findOne({email})
    if(existinguser){
        res.status(406).json("Account Already exist!!! Please Login....")
    }else{
        const newUser = new users({
            username,email,password,github:"",linkedIn:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
        }   
    }
    catch(err){
        res.status(401).json(`Register API Failed, Error: ${err}`)
    }
}