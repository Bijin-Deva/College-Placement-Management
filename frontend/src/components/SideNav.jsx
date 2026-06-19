import {Link, useNavigate } from "react-router-dom";
import Courses from "../pages/courses";
import Opportunities from "../pages/Opportunities";
import Profile from "../pages/Profile";

function SideNav(){
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    }

    return(
        <div style={{width:'220px', backgroundColor:'#212529',minHeight:'80vh',padding:'20px'}}>
            <Link to="/dashboard" style={{color:"white",display:'block',marginBottom:'10px'}}>Dashboard</Link>
            <Link to="/dashboard/opportunities" style={{color:"white",display:'block',marginBottom:'10px'}}>Opportunities</Link>
            <Link to="/dashboard/courses" style={{color:"white",display:'block',marginBottom:'10px'}}>Courses</Link>
            <Link to="/dashboard/profile" style={{color:"white",display:'block',marginBottom:'10px'}}>Profile</Link>
            <h1>Shadu baavaa pichodaaa....</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default SideNav;