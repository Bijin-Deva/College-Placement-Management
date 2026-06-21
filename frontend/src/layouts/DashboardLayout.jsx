import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
function DashboardLayout(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            <Header />
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden',height: '100%' }}>
                <SideNav />
                <main style={{ flex: 1, overflowY: 'auto' }}>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout;