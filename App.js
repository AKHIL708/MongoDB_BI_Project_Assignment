const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs")
require("./db/conn")
const studentDetails = require("./model/structure")
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("helo from home page")
})
app.get("/student",(req,res)=>{
    res.send("hello from student page")
})
app.get("/add",async(req,res)=>{
  try{
    let data = await studentDetails.find()
    res.send(data)
    fs.writeFile("studentList.json",JSON.stringify(data),err =>{
        if(err) throw err;
        console.log("Done with Writing")
    })
  }catch(err){
    console.log(err)
  }
})
app.get("*",(req,res)=>{
    res.send("Page not Found 😶...?")
})
app.post("/add",async(req,res)=>{
    try {
        const Structure = new studentDetails({
            StudentFirstName : req.body.StudentFirstName,
            CollegeName : req.body.CollegeName,
            Location : req.body.Location
        })
        Structure.save()
        res.status(200).json({result : "successfull Sent "})
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})


app.listen(port , "127.0.0.1",()=>{
    console.log(`port listening at ${port}`)
})