import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() { 
  const navigate = useNavigate();

  const [hoverOpp, setHoverOpp] = useState(false);
  const [hoverRes, setHoverRes] = useState(false);

  return (
    /* Moving the full-bleed background and scroll handling entirely inside Home */
    <div 
      className="container-fluid" 
      style={{ 
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 45%, #f0f9ff 100%)", 
        height: "100%", 
        overflowY: "auto",
        padding: "60px 50px",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)"
      }}
    >
        <div className="row align-items-center h-100">
            
            {/* Left Side: Text Elements */}
            <div className="col-md-6">
                <p 
                  style={{ 
                    fontSize: "64px", 
                    fontFamily: "'Times New Roman', Times, serif", 
                    fontWeight: "bold",
                    color: "#1e3a8a",
                    lineHeight: "1.1",
                    margin: "0 0 20px 0"
                  }}
                >
                  Engineered for<br /> Excellence
                </p>
                
                <p className="text-secondary mb-4 fs-6" style={{ maxWidth: "450px", lineHeight: "1.6" }}>
                  Shape your potential. Seize your opportunities. Track your progress.
                </p>

                {/* Buttons */}
                <div className="d-flex gap-3">
                    <button 
                        onClick={() => navigate("/home/opportunities")}
                        onMouseEnter={() => setHoverOpp(true)}
                        onMouseLeave={() => setHoverOpp(false)}
                        className="btn px-4 py-2 fw-semibold text-white shadow-sm"
                        style={{ 
                          backgroundColor: "#1e3a8a", 
                          border: "none", 
                          borderRadius: "6px",
                          transition: "all 0.2s ease-in-out",
                          transform: hoverOpp ? "scale(1.05)" : "scale(1)"
                        }}
                    >
                        Go to Opportunities
                    </button>
                    
                    <button 
                        onClick={() => navigate("/home/courses")}
                        onMouseEnter={() => setHoverRes(true)}
                        onMouseLeave={() => setHoverRes(false)}
                        className="btn px-4 py-2 fw-semibold shadow-sm"
                        style={{ 
                          backgroundColor: "#ffffff", 
                          color: "#1e3a8a", 
                          border: "1px solid #bae6fd", 
                          borderRadius: "6px",
                          transition: "all 0.2s ease-in-out",
                          transform: hoverRes ? "scale(1.05)" : "scale(1)"
                        }}
                    >
                        Resources
                    </button>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="col-md-6 text-center d-none d-md-block">
                <img 
                  src="/HomeCard.png" 
                  alt="Placement Portal Illustration" 
                  className="img-fluid" 
                  style={{ 
                    maxHeight: "460px", 
                    width: "100%",
                    objectFit: "contain"
                  }} 
                />
            </div>

        </div>
    </div>
  );
}

export default Home;