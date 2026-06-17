function ResetPasswordPage() {
    return (
        
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            
            
            <div className="p-3 shadow bg-white rounded" style={{ width: '500px' }}>
                <h2 className="text-center mb-4">Reset Password</h2>
                
                <div className="m-3">
                    <p className="mb-1"><strong>Enter your Email: </strong></p>
                    
                    <input 
                        type="email" 
                        placeholder="Enter your Email" 
                        required 
                        className="form-control w-100"
                    />
                </div>
                
                <div className="m-3">
                    <p className="mb-1"><strong>Enter OTP sent to your Email: </strong></p>
                    <input 
                        type="text" 
                        placeholder="Enter OTP" 
                        required 
                        className="form-control w-100"
                    />
                </div>
                
                <div className="m-3">
                    <p className="mb-1"><strong>Enter your new Password: </strong></p>
                    <input 
                        type="password" 
                        placeholder="Enter your new Password" 
                        required 
                        className="form-control w-100"
                    />
                </div>
                
                <div className="m-3">
                    <p className="mb-1"><strong>Confirm Password: </strong></p>
                    <input 
                        type="password" 
                        placeholder="Re-enter your new Password" 
                        required 
                        className="form-control w-100"
                    />
                </div>

                <div className="m-3">
                <button className="btn btn-primary w-100">Update Password</button>
                </div>
            </div>

        </div>
    );
}

export default ResetPasswordPage;