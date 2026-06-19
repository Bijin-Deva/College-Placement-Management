const mongoose=require('mongoose');
const jobsSchema=new mongoose.Schema({
    logoUrl: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    expectedSalary: {
        type: String,
        required: true
    },
    workModel: {
        type: String,
        required: true
    },
    lastDateToApply: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model("Job",jobsSchema);