import { Link } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
function LoginPage(){
    return(
        <div className="container" style={{backgroundColor:'rgba(0, 0, 0, 0)',borderRadius:'7px',height:'600px',width:'1100px',align:'center',
        marginTop:'40px',overflow:'hidden',boxShadow:'0 4px 12px rgba(56, 230, 201, 0.89)',padding:'0'}}>
            <div className="row">
                <div className="col-md-6">
                    <img src="/LoginCard.jpg" alt="LoginCard" height='600px' width='550px' style={{borderRadius:'7px'}} />
                </div>
                <div className="col-md-6 ">
                    <h1 style={{marginTop:'10px',fontFamily:'sans-serif'}}>Welcome!Great Day Ahead</h1>
                    <h4 style={{fontFamily:'cursive'}}>Login to continue....</h4>
                    <div style={{border:'1px solid black',borderRadius:'7px',alignItems:'center',
                            height:'300px',width:'450px',marginTop:'25px',marginLeft:'20px',padding:'10px'}}>
                        <form>
                            <h4>Email: </h4>
                            <div>
                                <input type="email" id="passwordInp" placeholder="Enter valid Email" style={{width: '100%',padding: '10px 15px',
                                    borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
                            </div><br />
                            <h4>Password: </h4>
                            <div>
                                <input type="password" id="passwordInp" placeholder="Password must be 8 characters long" style={{width: '100%',padding: '10px 15px',
                                    borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}/>
                            </div><br />
                            <button className="btn btn-primary" style={{width: '100%',padding: '10px 15px',borderRadius: '4px', border: '1px solid #ccc',boxSizing: 'border-box' }}>Login</button>
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