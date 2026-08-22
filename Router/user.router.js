// import { Router } from "express"
import express, { Router } from "express"
import { home, create, read,username, readName, updateId, deleteId} from "../controller/user.controller.js"

let userRouter = express(Router())


userRouter.get("/" , home)
userRouter.get("/create" , create)
userRouter.get("/read" , read)
userRouter.get("/username" , username)
userRouter.get("/readName" , readName)
userRouter.get("/updateId" , updateId)
userRouter.get("/deleteId" , deleteId)


// // create operation  : request sent through thunderclient

// userRouter.post("/create" , create)

// // All users will be got from collection

// userRouter.get("/read" ,read)

// // to retrive an data by username  : using req.params

// userRouter.get("/read/:username" ,username)

// // filter the document based on conditions: mongoose provides an special operators for such operations 
// // e.g.  find the all documents where age is greater than 21

// userRouter.get("/read/:name" ,readName)

// // update the entries of db

// userRouter.put("/update/:id" ,updateId)
 
// // use of updateOne


// // userRouter.put("/update" , async(req,res) => {
// //     try {
// //     let {name,age,email} = req.body
// //     let user = await User.updateOne({email}, {name,age},{new:true})
// //     return res.status(200).json({message : "USER UPDATED"})
// //     } catch (error) {
// //         return res.status(400).json({message: "user not found"})
// //     }
// // })

// userRouter.delete("/delete/:id" ,deleteId)


export default userRouter