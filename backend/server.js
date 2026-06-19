const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const bcrypt =require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User=require('./models/User');
const app=express();
const Job=require('./models/jobs');


app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Cloud Connected successfully")
}).catch((e)=>{
    console.log("MongoDB connection failed ",e);
});


app.get("/",(req,res)=>{
    res.send("Backend Server Running");
});
app.post("/api/register",async(req,res)=>{
    try{
        const {fullName,username ,collegeemail,personalemail,gender,rollnumber,year,department,skills,password}=req.body;
        const existingUser = await User.findOne({collegeemail:collegeemail});
        if (existingUser){
            return res.status(400).json({
                message:"Email already exist",
            });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser = new User({
            fullName:fullName,
            username:username,
            collegeemail:collegeemail,
            personalemail:personalemail,
            gender:gender,
            rollnumber:rollnumber,
            year:year,
            department:department,
            skills:skills,
            password:hashedPassword,
        });
        await newUser.save();
        res.status(200).json({
            message:"successfully created user",
        });
    }catch(error){
        console.error(error);

        return res.status(500).json({
            message:"Registration failed",
            error:error.message,
            });
    }
});
app.post("/api/login", async (req, res) => {
    try {
        const { collegeemail, password } = req.body;

        const existingUser = await User.findOne({ collegeemail });

        if (!existingUser) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const isPasswordMatch = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                id: existingUser._id,
                collegeemail: existingUser.collegeemail,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        return res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                id: existingUser._id,
                fullName: existingUser.fullName,
                collegeemail: existingUser.collegeemail,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Login failed",
            error: error.message,
        });
    }
});

app.post("/api/jobs", async (req, res) => {
    try {
        const { logourl, jobTitle, description, skills, salary, workModel, lastDate } = req.body;

        const newJob = new Job({
            logoUrl: logourl,
            jobTitle: jobTitle,
            description: description,
            skills: skills,
            expectedSalary: salary,
            workModel: workModel,
            lastDateToApply: lastDate
        });

        await newJob.save();

        return res.status(201).json({
            message: "Job created successfully",
            job: newJob
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create job",
            error: error.message
        });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
});
