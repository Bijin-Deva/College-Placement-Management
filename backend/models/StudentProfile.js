const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    technologies: {
      type: String,
      default: "",
      trim: true,
    },

    githubLink: {
      type: String,
      default: "",
      trim: true,
    },

    projectLink: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);


const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
    },

    issueDate: {
      type: Date,
    },

    certificateLink: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);


const internshipSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { _id: false }
);
const achievementSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        default:"",
        trim:true
    },

    date:{
        type:Date
    }
},
{ _id:false }
);

const studentProfileSchema = new mongoose.Schema(
  {

    collegeemail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },


    profilePicture: {
      type: String,
      default: "",
    },

    dateOfBirth: {
      type: Date,
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },


    semester: {
      type: String,
      default: "",
      trim: true,
    },

    cgpa: {
      type: String,
      default: "",
      trim: true,
    },

    tenthPercentage: {
      type: String,
      default: "",
      trim: true,
    },

    twelfthPercentage: {
      type: String,
      default: "",
      trim: true,
    },

    activeBacklogs: {
      type: Number,
      default: 0,
      min: 0,
    },


    technicalSkills: {
      type: [String],
      default: [],
    },

    programmingLanguages: {
      type: [String],
      default: [],
    },

    softSkills: {
      type: [String],
      default: [],
    },



    github: {
      type: String,
      default: "",
      trim: true,
    },

    linkedin: {
      type: String,
      default: "",
      trim: true,
    },

    portfolio: {
      type: String,
      default: "",
      trim: true,
    },

    leetcode: {
      type: String,
      default: "",
      trim: true,
    },

    hackerrank: {
      type: String,
      default: "",
      trim: true,
    },

    codechef: {
      type: String,
      default: "",
      trim: true,
    },

    /* Collections */

    projects: {
      type: [projectSchema],
      default: [],
    },

    certifications: {
      type: [certificationSchema],
      default: [],
    },

    internships: {
      type: [internshipSchema],
      default: [],
    },

   achievements:{
        type:[achievementSchema],
        default:[]
    },
    languagesKnown:{
        type:[String],
        default:[]
    },
    careerObjective:{
        type:String,
        default:"",
        trim:true
    },
    areasOfInterest:{
        type:[String],
        default:[]
    },
    resumeUrl: {
      type: String,
      default: "",
    },

    /* Placement */

    companiesApplied: {
      type: Number,
      default: 0,
      min: 0,
    },

    interviewsAttended: {
      type: Number,
      default: 0,
      min: 0,
    },

    offersReceived: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentProfile", studentProfileSchema);