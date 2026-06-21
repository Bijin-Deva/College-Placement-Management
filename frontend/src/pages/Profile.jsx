import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    return (
      <div className="card border-0 rounded-4 shadow p-5 text-center my-4">
        <h2 className="fs-3 fw-bold text-secondary">No user data found</h2>
        <p className="text-muted mt-2">Please login to view your profile.</p>
      </div>
    );
  }

  const skills = Array.isArray(user.skills) ? user.skills : [];

  return (
    <div className="container-fluid p-0">
      {/* Header Card Banner */}
      <div 
        className="rounded-4 p-4 p-md-5 text-white shadow-sm mb-4"
        style={{ background: "linear-gradient(to right, #1e3a8a, #2563eb)" }}
      >
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
          <div className="d-flex flex-column flex-md-row align-items-center gap-4 text-center text-md-start">
            {/* User Avatar Initials Circle */}
            <div 
              className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center fw-bold shadow-sm"
              style={{ width: "100px", height: "100px", fontSize: "2.5rem", color: "#1e3a8a" }}
            >
              {user.fullName?.charAt(0)?.toUpperCase() || "S"}
            </div>

            <div>
              <h1 className="display-6 fw-bold mb-1">{user.fullName}</h1>
              <p className="mb-1 text-white-50 fs-5">{user.branch} Student</p>
              <p className="mb-0 text-white-50 opacity-75 small">{user.college}</p>
            </div>
          </div>

          <button className="btn btn-light text-primary fw-semibold px-4 py-2.5 rounded-3 d-inline-flex align-items-center gap-2 border-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
            </svg>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Main Details & Stats Grid Layout */}
      <div className="row g-4">
        {/* Personal Information Segment */}
        <div className="col-12 col-lg-8">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <h2 className="fs-4 fw-bold mb-4">Personal Information</h2>
            
            <div className="row g-4">
              {/* Email */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">Email</p>
                  <p className="fw-semibold mb-0 text-break">{user.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">Phone</p>
                  <p className="fw-semibold mb-0">{user.phone}</p>
                </div>
              </div>

              {/* College */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0l4.5-1.8v2.31c-.224.086-.447.18-.667.284C11.53 10.511 10.5 11.135 10 11.5c-.5-.365-1.528-.99-2.016-1.219a15 15 0 0 0-.668-.284v-2.3l4.5 1.8a.5.5 0 0 0 .372 0l7.5-3a.5.5 0 0 0 .025-.917z"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">College</p>
                  <p className="fw-semibold mb-0">{user.college}</p>
                </div>
              </div>

              {/* Branch */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">Branch</p>
                  <p className="fw-semibold mb-0">{user.branch}</p>
                </div>
              </div>

              {/* Year */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">Year</p>
                  <p className="fw-semibold mb-0">{user.year}</p>
                </div>
              </div>

              {/* CGPA */}
              <div className="col-12 col-md-6 d-flex gap-3 align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0d6efd" viewBox="0 0 16 16" className="mt-1 flex-shrink-0">
                  <path d="M4.865 12.354a.5.5 0 0 0 .73-.648l-1.92-2.16a2.5 2.5 0 1 1 1.322-3.243l1.933 2.175a.5.5 0 1 0 .744-.668L5.72 5.61a3.5 3.5 0 1 0-2.316 4.885l1.462 1.644z"/>
                  <path d="M4.5 9a3.5 3.5 0 1 1 7 0v3h1a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1h1V9z"/>
                </svg>
                <div>
                  <p className="text-muted small mb-0">CGPA</p>
                  <p className="fw-semibold mb-0">{user.cgpa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Statistics Segment */}
        <div className="col-12 col-lg-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <h2 className="fs-4 fw-bold mb-4">Profile Stats</h2>
            
            <div className="d-flex flex-column gap-3">
              <div className="p-3 rounded-4" style={{ backgroundColor: "#eff6ff" }}>
                <p className="text-muted small mb-1">Profile Completion</p>
                <h3 className="fw-bold text-primary mb-0">90%</h3>
              </div>

              <div className="p-3 rounded-4" style={{ backgroundColor: "#f0fdf4" }}>
                <p className="text-muted small mb-1">Applications Submitted</p>
                <h3 className="fw-bold text-success mb-0">
                  {JSON.parse(localStorage.getItem("appliedCompanies"))?.length || 0}
                </h3>
              </div>

              <div className="p-3 rounded-4" style={{ backgroundColor: "#fefce8" }}>
                <p className="text-muted small mb-1">Skills Added</p>
                <h3 className="fw-bold text-warning mb-0" style={{ color: "#ca8a04" }}>
                  {skills.length}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Pill List Block */}
      <div className="card border-0 rounded-4 shadow-sm p-4 mt-4">
        <div className="d-flex align-items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffc107" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <h2 className="fs-4 fw-bold mb-0">Skills</h2>
        </div>

        {skills.length === 0 ? (
          <p className="text-muted mb-0">No skills added yet.</p>
        ) : (
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="badge rounded-pill fw-medium px-3 py-2 text-primary"
                style={{ backgroundColor: "#dbeafe", fontSize: "0.9rem" }}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Academic Grid Overview Summary Block */}
      <div className="card border-0 rounded-4 shadow-sm p-4 mt-4 mb-4">
        <div className="d-flex align-items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0d6efd" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
          </svg>
          <h2 className="fs-4 fw-bold mb-0">Academic Summary</h2>
        </div>

        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center h-100">
              <p className="text-muted small mb-1">Branch</p>
              <h5 className="fw-bold mb-0">{user.branch}</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center h-100">
              <p className="text-muted small mb-1">Year</p>
              <h5 className="fw-bold mb-0">{user.year}</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center h-100">
              <p className="text-muted small mb-1">CGPA</p>
              <h5 className="fw-bold mb-0">{user.cgpa}</h5>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center h-100">
              <p className="text-muted small mb-1">Skills</p>
              <h5 className="fw-bold mb-0">{skills.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;