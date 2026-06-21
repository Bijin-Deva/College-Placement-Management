// import { use, useState } from "react";
// import  axios  from "axios";
// import { Link } from "react-router-dom";
// import RegistrationPage from "./RegistrationPage";
// import { useNavigate } from "react-router-dom";
// //import Dashboard from "./pages/Dashboard";

// function LoginPage(){

//     const [email,setEmail] = useState("");
//     const [password,setPassword]=useState("");

//     const navigate = useNavigate();

//     const handleLogin = async(e) => {
//         e.preventDefault();

//         const loginData = {
//             collegeemail : email,
//             password : password,
//         };

//         try {
//             const response = await axios.post(
//                 "http://localhost:5000/api/login",
//                 loginData
//             );

//             localStorage.setItem("token",response.data.token);
//             localStorage.setItem("user",JSON.stringify(response.data.user));
        
//             alert(response.data.message);
//                 navigate("/home");
//         }catch(error){
//             alert(error.response.data.message);
//         }

//     };


//     return(
//         <div className="container" style={{backgroundColor:'rgba(0, 0, 0, 0)',borderRadius:'7px',height:'600px',width:'1100px',align:'center',
//         marginTop:'40px',overflow:'hidden',boxShadow:'0 4px 12px gray',padding:'0'}}>
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src="/LoginCard.jpg" alt="LoginCard" height='600px' width='550px' style={{borderRadius:'7px'}} />
//                 </div>
//                 <div className="col-md-6 ">
//                     <h1 style={{marginTop:'10px',fontFamily:'sans-serif'}}>Welcome!Great Day Ahead</h1>
//                     <h4 style={{fontFamily:'cursive'}}>Login to continue....</h4>
//                     <div style={{boxShadow:'0 4px 12px gray',borderRadius:'7px',alignItems:'center',
//                             height:'300px',width:'450px',marginTop:'25px',marginLeft:'20px',padding:'10px'}}>
//                         <form onSubmit={handleLogin}>
//                             <h4>Email: </h4>
//                             <div>
//                                 <input type="email" id="passwordInp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter valid Email" 
//                                 style={{width: '100%',padding: '10px 15px',borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
//                             </div><br />
//                             <h4>Password: </h4>
//                             <div>
//                                 <input type="password" id="passwordInp" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" style={{width: '100%',padding: '10px 15px',
//                                     borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
//                             </div><br />
//                             <button className="btn btn-primary" type="submit"style={{width: '100%',padding: '10px 15px',borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}>Login</button>
//                         </form>
//                     </div><br />
//                     <h6 style={{ marginLeft: "20px" }}>
//                         No account!{" "}
//                         <strong>
//                         <Link to="/register">Register Here</Link>
//                         </strong>
//                     </h6>

//                     <h6 style={{ marginLeft: "20px" }}>
//                         Forgot Password!{" "}
//                         <strong>
//                         <Link to="/reset-password">Reset Here</Link>
//                         </strong>
//                     </h6>
                    
//                     <br /><br />
//                     <p style={{textAlign:'center'}}>@All rights reserved 2026.<strong> Contact:</strong> admin@clg.com</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginPage;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  // State definitions matching your backend variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      collegeemail: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        loginData
      );

      // Preserving your storage keys and payload parsing structure
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert(response.data.message);
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Main Fullscreen Layout Wrapper */
    <div className="w-100 vh-100 d-flex bg-light m-0 p-0 overflow-hidden">
      
      {/* Left Section - Gradient Banner */}
      <div 
        className="w-50 d-none d-md-flex flex-column justify-content-center text-white position-relative overflow-hidden px-5"
        style={{ 
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          paddingLeft: "5rem",
          paddingRight: "5rem"
        }}
      >
        {/* FIXED: Decorative Background Circles changed to semi-transparent white overlays instead of solid white */}
        <div 
          className="position-absolute rounded-circle" 
          style={{ 
            top: 0, 
            right: 0, 
            width: "300px", 
            height: "300px", 
            transform: "translate(30%, -30%)",
            backgroundColor: "rgba(255, 255, 255, 0.12)" 
          }}
        ></div>
        <div 
          className="position-absolute rounded-circle" 
          style={{ 
            bottom: 0, 
            left: 0, 
            width: "400px", 
            height: "400px", 
            transform: "translate(-20%, 20%)",
            backgroundColor: "rgba(255, 255, 255, 0.08)" 
          }}
        ></div>

        <div className="position-relative" style={{ zIndex: 10 }}>
          <h1 className="display-4 fw-bold mb-2">Welcome to</h1>
          <h2 className="display-6 fw-light text-white-50 mb-4">Placement Portal</h2>
          <p className="lead mb-4" style={{ maxWidth: "450px", opacity: 0.9 }}>
            Connect with top recruiters, explore opportunities, track applications, and start your career journey.
          </p>
          {/* Student illustration asset */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="student illustration"
            className="img-fluid mt-4"
            style={{ width: "280px" }}
          />
        </div>
      </div>

      {/* Right Section - Functional Login Form Panel */}
      <div className="flex-grow-1 w-50 d-flex align-items-center justify-content-center p-4">
        <div 
          className="bg-white w-100 shadow p-5" 
          style={{ maxWidth: "460px", borderRadius: "24px" }}
        >
          <h2 className="text-center fw-bold mb-2" style={{ color: "#1e3a8a" }}>
            Login
          </h2>
          <p className="text-center text-muted mb-4">
            Enter your account details
          </p>

          <form onSubmit={handleLogin}>
            {/* Email input field mapping to 'collegeemail' */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control form-control-lg border shadow-none"
                style={{ borderRadius: "12px", padding: "14px" }}
              />
            </div>

            {/* Password input field */}
            <div className="mb-3">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control form-control-lg border shadow-none"
                style={{ borderRadius: "12px", padding: "14px" }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-end mb-4">
              <Link to="/reset-password" className="text-decoration-none small text-primary fw-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Form Action Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg w-100 fw-semibold text-white transition py-3 mb-4"
              style={{ backgroundColor: "#1e3a8a", border: "none", borderRadius: "12px" }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Registration Path Router Redirection Link */}
            <p className="text-center text-muted mb-0">
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none fw-bold" style={{ color: "#1e3a8a" }}>
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}

export default LoginPage;