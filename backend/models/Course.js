const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    logoUrl:{
        type:String,
        required:true,
    },
    courseTitle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    courseLink:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Course",courseSchema);