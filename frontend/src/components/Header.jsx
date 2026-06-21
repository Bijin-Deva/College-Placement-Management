function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    
    return (
        <div 
            className="sticky-top d-flex justify-content-between align-items-center" 
            style={{
                padding: '15px', 
                backgroundColor: 'white', 
                color: 'black',
                boxShadow: '0 2px 4px gray'
            }}
        >
            <div className="d-flex align-items-center gap-3">
                {/* Logo Image */}
                <img src="/titlelogo1.jpg" alt="Logo"  style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                
                <div>
                    <p style={{ margin: 0, fontSize: '24px' }}><strong>Placement Dashboard</strong></p>
                    <p style={{ margin: '3px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
                        Track opportunities and manage your career journey
                    </p>
                </div>
            </div>

           
            <div className="d-flex align-items-center gap-2">
                {/* Avatar Circle */}
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-black font-weight-bold" 
                  style={{ width: '40px', height: '40px', fontSize: '16px', border: '2px solid white' }}
                >
                  {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "S"}
                </div>

                
                <div className="d-none d-md-block text-start">
                  <p className="fw-medium text-black mb-0" style={{ lineHeight: '1.2' }}>
                    {user?.fullName || "Student"}
                  </p>
                  <p className="text-black-50 small mb-0">
                    {user?.collegeemail || ""}
                  </p>
                </div>
            </div>
        </div>
    );
}

export default Header;