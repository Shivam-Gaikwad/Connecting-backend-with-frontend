import express from "express";
import cors from "cors";
const app = express()
const port = 8000

// middleware to convert the data got from the frontend into the json format
app.use(express.json())


//CORS : it is an third party middleware

app.use(cors({
    "origin" : "http://localhost:5173"
}))

app.get("/", (req,res) => {
    res.json("Server connected successfully")
})

app.listen(port , () => {
    console.log("server started")
})


// create an form and get data filled by user in frontend from these from in backend

app.post("/", (req,res) => {
    console.log(req.body)
    res.json({success:true})
})
