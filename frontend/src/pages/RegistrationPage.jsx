function RegistrationPage(){
    return(

        <div className="container shadow mt-4 md-7 p-5" style={{width:'1000px'}}>
            <h2>Registration Form..</h2><br />
            <form>
            <h6>Name: </h6>
            <div className=" form-floating mb-3">
                <input type="text" className="form-control" id="username" required placeholder="Enter your full name" />
                <label htmlFor="username">Enter your full Name</label>
            </div>
            <div className="container">
                <h6>Username:</h6>
                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" required placeholder="Enter Username" />
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="mb-3 col-md-6">
                        <label className="form-label">Enter College Email ID: </label>
                        <input type="email" className="form-control" required id="clg-email" placeholder="Enter college Email" /> 
                    </div>

                    
                    <div className=" mb-3 col-md-6">
                    <label className="form-label">Enter Personal Email ID: </label>
                    <input type="email" className="form-control" required id="personal-email" placeholder="Enter Personal Email" /> 
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Select Gender</label>
                            <select className="form-select">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Enter Roll No. : </label>
                        <input type="text" className="form-control" required placeholder="Enter Roll Number" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Select Year:</label>
                        <select className="form-select" required>
                            <option>Select Year</option>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Select Department:</label>
                        <select className="form-select" required>
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
                            placeholder="Enter your skill set" required
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">

                    <div className="mb-3 col-md-6">
                        <label className="form-label"><strong>Enter Password: </strong></label>
                        <input type="password" className="form-control" required placeholder="Enter your password" /> 
                    </div>

                    
                    <div className=" mb-3 col-md-6">
                    <label className="form-label"><strong>Confirm your password: </strong></label>
                    <input type="password" className="form-control" required placeholder="Re-Enter the password" /> 
                    </div>
                </div>
            </div>
            
            <div>
            <button className="btn btn-primary btn-lg mt-3">Register</button> &nbsp;&nbsp;
            <button className="btn btn-danger btn-lg mt-3">Clear</button>
            </div>
        
            </form>

        </div>

    )
}

export default RegistrationPage;