import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
function DashboardLayout(){
    return(
        <div>
            <Header />
            <div style={{display:'flex'}}>
                <SideNav />
                <main style={{padding:'20px',flex:1}}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout;