import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
// import router from "./routes/userROutes.js";

const app=express();
dotenv.config();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const __dirname=path.resolve();

app.use(morgan('dev'));


app.use(express.json());
// app.use('/',router);

app.get("/ping",(req,res)=>{
    return res.sendFile(__dirname+'/public/index.html');
});

app.get("/urllogin", (req, res) => {
    return res.sendFile(__dirname+'/public/login.html');
    // res.send(
    //     `<form method='post' action='/login'>
    //         <input name="email" placeholder="text" />
    //         <input name="password"  placeholder="password"/>
    //         <input type='submit' value="Login"/>
    //     </form>`
    // )
})

app.post('/login', (req, res) => {
    const{email,password}=req.body;
    console.log(email)
    console.log(password)
    res.send(`Your email ${email} and passsword is ${password}`)
})

mongoose.connect('process.env.MONGODB')
.then(()=>console.log("Db connected"))
.catch((err)=>console.log("Db connected."));

app.listen(process.env.PORT,()=>console.log("working on PORT"));