import { use, useState } from "react";
import  axios  from "axios";
import { Link } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import { useNavigate } from "react-router-dom";
//import Dashboard from "./pages/Dashboard";

function LoginPage(){

    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();

        const loginData = {
            collegeemail : email,
            password : password,
        };

        try {
            const response = await axios.post(
                "http://localhost:5000/api/login",
                loginData
            );

            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
        
            alert(response.data.message);
                navigate("/home");
        }catch(error){
            alert(error.response.data.message);
        }

    };


    return(
        <div className="container" style={{backgroundColor:'rgba(0, 0, 0, 0)',borderRadius:'7px',height:'600px',width:'1100px',align:'center',
        marginTop:'40px',overflow:'hidden',boxShadow:'0 4px 12px gray',padding:'0'}}>
            <div className="row">
                <div className="col-md-6">
                    <img src="/LoginCard.jpg" alt="LoginCard" height='600px' width='550px' style={{borderRadius:'7px'}} />
                </div>
                <div className="col-md-6 ">
                    <h1 style={{marginTop:'10px',fontFamily:'sans-serif'}}>Welcome!Great Day Ahead</h1>
                    <h4 style={{fontFamily:'cursive'}}>Login to continue....</h4>
                    <div style={{boxShadow:'0 4px 12px gray',borderRadius:'7px',alignItems:'center',
                            height:'300px',width:'450px',marginTop:'25px',marginLeft:'20px',padding:'10px'}}>
                        <form onSubmit={handleLogin}>
                            <h4>Email: </h4>
                            <div>
                                <input type="email" id="passwordInp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter valid Email" 
                                style={{width: '100%',padding: '10px 15px',borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
                            </div><br />
                            <h4>Password: </h4>
                            <div>
                                <input type="password" id="passwordInp" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" style={{width: '100%',padding: '10px 15px',
                                    borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
                            </div><br />
                            <button className="btn btn-primary" type="submit"style={{width: '100%',padding: '10px 15px',borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}>Login</button>
                        </form>
                    </div><br />
                    <h6 style={{ marginLeft: "20px" }}>
                        No account!{" "}
                        <strong>
                        <Link to="/register">Register Here</Link>
                        </strong>
                    </h6>

                    <h6 style={{ marginLeft: "20px" }}>
                        Forgot Password!{" "}
                        <strong>
                        <Link to="/reset-password">Reset Here</Link>
                        </strong>
                    </h6>
                    
                    <br /><br />
                    <p style={{textAlign:'center'}}>@All rights reserved 2026.<strong> Contact:</strong> admin@clg.com</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
