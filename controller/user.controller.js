
import User from "../models/user.model.js"

export const  home = (req, res) => {
    res.send("learning Database connection")
}
export const create = async (req ,res) => {
    try{
      let   {name,age,password,username} = req.body
      const newUser = await User.create({
        name,
        age,
        password,
        username
      })
      res.status(201).json({message:"user created"})
    }catch(error){
        res.status(500).json({message:error})
    }
}

export const read = async(req,res) => {
    try {
        const users = await User.find()
       return  res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({message: "user not found"})
    }
}

export const username = async(req,res) => {
    try {
        const users = await User.findOne({username:req.params.username})
       return  res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({message: "user not found"})
    }
}

export const readName = async(req,res) => {
    try {
        const users = await User.find({name: {$ne:"vivek"}})
       return  res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({message: "user not found"})
    }
}

export const updateId =  async(req,res) => {
    try {
    let {name,age} = req.body
    let id = req.params.id
    let user = await User.findByIdAndUpdate(id, {name,age},{new:true})
    return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message: "user not found"})
    }
}

export const deleteId = async(req,res) => {
    try {
        let id = req.params.id
        let user = await User.findByIdAndDelete(id)
        return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({message: "user not found"})
    }
}