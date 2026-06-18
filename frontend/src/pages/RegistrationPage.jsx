import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
function RegistrationPage(){
    const [fullName,setFullName]=useState("");
    const [username,setUsername]=useState("");
    const [collegeemail,setCollegeemail]=useState("");
    const [personalemail,setPersonalemail]=useState("");
    const [gender,setGender]=useState("");
    const [rollnumber,setRollnumber]=useState("");
    const [year,setYear]=useState("");
    const [department,setDepartment]=useState("");
    const [skills,setSkills]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
    
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        const userData = {
            fullName,
            username,
            collegeemail,
            personalemail,
            gender,
            rollnumber,
            year,
            department,
            skills,
            password,
        };
    
        try {
            const response = await axios.post(
                "http://localhost:5000/api/register",
                userData
            );
    
            alert("Registration Successful!Continue to Login");
    
            setFullName("");
            setUsername("");
            setCollegeemail("");
            setPersonalemail("");
            setGender("");
            setRollnumber("");
            setYear("");
            setDepartment("");
            setSkills("");
            setPassword("");
            setConfirmPassword("");
    
        } catch (error) {
    
            if (error.response) {
    
                // Email already exists
                if (error.response.status === 409) {
                    alert("Email already exists.");
                }
                else {
                    alert("Registration failed. Please try again.");
                }
    
                console.error(error.response.data);
    
            } else {
                alert("Registration failed. Please try again.");
            }
        }
    };
    const handleClear = () => {
        setFullName("");
        setUsername("");
        setCollegeemail("");
        setPersonalemail("");
        setGender("");
        setRollnumber("");
        setYear("");
        setDepartment("");
        setSkills("");
        setPassword("");
        setConfirmPassword("");
    };

    return(
        <div className="container shadow mt-4 md-7 p-5" style={{width:'1000px'}}>
            <h2>Registration Form..</h2><br />
            <div className="mb-3">
                <Link
                    to="/login"
                    className="text-decoration-none fw-semibold"
                >
                    ← Back to Login
                </Link>
            </div>
            <form onSubmit={handleRegister}>
            <h6>Name: </h6>
            <div className=" form-floating mb-3">
                <input type="text" className="form-control" value={fullName} id="username" required placeholder="Enter your full name" onChange={(e)=>{setFullName(e.target.value)}} />
                <label htmlFor="username">Enter your full Name</label>
            </div>
            <div className="container">
                <h6>Username:</h6>
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" value={username} required placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="mb-3 col-md-6">
                        <label className="form-label">Enter College Email ID: </label>
                        <input type="email" className="form-control" value={collegeemail} required id="clg-email" placeholder="Enter college Email" onChange={(e)=>{setCollegeemail(e.target.value)}} />
                    </div>

                   
                    <div className=" mb-3 col-md-6">
                    <label className="form-label">Enter Personal Email ID: </label>
                    <input type="email" className="form-control" value={personalemail} required id="personal-email" placeholder="Enter Personal Email" onChange={(e)=>{setPersonalemail(e.target.value)}} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Select Gender</label>
                            <select className="form-select" value={gender} onChange={(e) => {setGender(e.target.value)}}>
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Roll No. : </label>
                        <input type="text" className="form-control" value={rollnumber} required placeholder="Enter Roll Number" onChange={(e)=>{setRollnumber(e.target.value)}} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Select Year:</label>
                        <select className="form-select" required value={year} onChange={(e)=>{setYear(e.target.value)}}>
                            <option>Select Year</option>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Select Department:</label>
                        <select className="form-select"  value={department} required onChange={(e)=>{setDepartment(e.target.value)}}>
                            <option>Select Department</option>
                            <option>CSE</option>
                            <option>CSM</option>
                            <option>ECE</option>
                            <option>EEE</option>
                            <option>CIV</option>
                            <option>MEC</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2>Skills:</h2>
                        <textarea
                            className="form-control w-100"
                            rows="3"
                            placeholder="Enter your skill set" value={skills} required onChange={(e)=>{setSkills(e.target.value)}}
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">

                    <div className="mb-3 col-md-6">
                        <label className="form-label"><strong>Enter Password: </strong></label>
                        <input type="password" className="form-control" required placeholder="Enter your password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />                    
                    </div>

                   
                    <div className=" mb-3 col-md-6">
                    <label className="form-label"><strong>Confirm your password: </strong></label>
                    <input type="password" className="form-control" required placeholder="Re-Enter the password" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {confirmPassword && password !== confirmPassword && (
                        <small className="text-danger">
                            Passwords do not match.
                        </small>
                    )}
                    </div>
                </div>
            </div>
           
            <div>
            <button type="submit" className="btn btn-primary btn-lg mt-3">Register</button> &nbsp;&nbsp;
            <button type="button" className="btn btn-danger btn-lg mt-3" onClick={handleClear}>Clear</button>
            </div>
       
            </form>

        </div>

    )
}

export default RegistrationPage;