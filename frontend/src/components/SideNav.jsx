import { Link, useNavigate } from "react-router-dom";
import Courses from "../pages/courses";
import Opportunities from "../pages/Opportunities";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

function SideNav(){
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }

    return(
        <div style={{
            width: '220px', 
            background: "linear-gradient(to right, #1e3a8a, #3b82f6)", 
            height: '80vh',
            padding: '25px',
            display: 'flex',          
            flexDirection: 'column',
            boxSizing: 'border-box'}}>
                {/* REMOVED THE LEADING DASHES HERE!
                  "." matches exactly "/home"
                  "dashboard" matches "/home/dashboard"
                */}
                <div> <Link to="." style={{color:"white", display:'block', marginBottom:'20px', textDecoration:'none', fontSize:'18px'}}>Home</Link></div>
                <div> <Link to="opportunities" style={{color:"white", display:'block', marginBottom:'20px', textDecoration:'none', fontSize:'18px'}}>Opportunities</Link></div>
                <div> <Link to="courses" style={{color:"white", display:'block', marginBottom:'20px', textDecoration:'none', fontSize:'18px'}}>Resources</Link></div>
                <div> <Link to="dashboard" style={{color:"white", display:'block', marginBottom:'20px', textDecoration:'none', fontSize:'18px'}}>Dashboard</Link></div>
                <div> <Link to="profile" style={{color:"white", display:'block', marginBottom:'20px', textDecoration:'none', fontSize:'18px'}}>Profile</Link></div>
            
            <button 
                onClick={handleLogout} 
                style={{
                    marginTop: 'auto',
                    backgroundColor: '#ef4444', 
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    marginBottom: '10px',        
                    width: '100%'            
                }}
            >
                Logout
            </button>
        </div>
    )
}

export default SideNav;