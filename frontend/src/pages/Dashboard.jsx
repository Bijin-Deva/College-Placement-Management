import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ search = "", setSearch = () => {} }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs/opportunities from your backend API
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        // Using your exact backend endpoint
        const response = await fetch("http://localhost:5000/api/jobs"); 
        if (!response.ok) {
          throw new Error("Failed to fetch opportunities data");
        }
        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Filter based on search criteria
  const filteredCompanies = companies.filter((company) =>
    (company?.name || company?.companyName || "")
      .toLowerCase()
      .includes((search || "").toLowerCase())
  );

  // Slice the filtered list to show only the 4 most recent opportunities
  const latestFourCompanies = filteredCompanies.slice(0, 4);

  const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");

  return (
    <div className="container-fluid p-0">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control rounded-pill border-0 shadow-sm p-3 mb-4"
        style={{ maxWidth: "450px" }}
      />

      {/* Hero Welcome Banner */}
      <div 
        className="rounded-4 p-5 text-white mb-4" 
        style={{ background: "linear-gradient(to right, #1e3a8a, #3b82f6)" }}
      >
        <h1 className="display-5 fw-bold mb-2">
          Welcome Back, {user?.fullName || "Student"}!
        </h1>
        <p className="lead mb-0 opacity-75">
          Explore placement opportunities and discover companies.
        </p>
      </div>

      {/* Statistics Cards Grid */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <h2 className="display-6 fw-bold mb-1">{companies.length}</h2>
            <p className="text-muted mb-0 fw-medium">Companies</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <h2 className="display-6 fw-bold mb-1">0</h2>
            <p className="text-muted mb-0 fw-medium">Shortlisted</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <h2 className="display-6 fw-bold mb-1">0</h2>
            <p className="text-muted mb-0 fw-medium">Offers</p>
          </div>
        </div>
      </div>

      {/* Available Companies Container */}
      <div className="card border-0 rounded-4 shadow-sm p-4">
        {/* Header with Title and Navigation Arrow */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-3 fw-bold mb-0">Available Companies</h2>
          <Link 
            to="/opportunities" 
            className="text-decoration-none fw-semibold d-flex align-items-center gap-1 text-primary"
          >
            Explore More &rarr;
          </Link>
        </div>

        {/* API States handling */}
        {loading && <p className="text-muted my-3">Loading companies...</p>}
        {error && <p className="text-danger my-3">Error: {error}</p>}

        {/* 4 Cards Grid View Layout */}
        {!loading && !error && (
          latestFourCompanies.length === 0 ? (
            <p className="text-muted my-3">No companies found.</p>
          ) : (
            <div className="row g-3">
              {latestFourCompanies.map((company) => (
                <div key={company._id || company.id} className="col-12 col-sm-6 col-lg-3">
                  <div className="card h-100 border border-light-subtle rounded-3 p-3 shadow-sm">
                    <div className="card-body p-0 d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="fw-bold mb-1 text-truncate">
                          {company.name || company.companyName || "Unnamed Company"}
                        </h5>
                        <p className="text-primary fw-medium small mb-2 text-truncate">
                          {company.role || "Role not specified"}
                        </p>
                        <p className="text-muted mb-3 small text-truncate">
                          {company.location || "Location not specified"}
                        </p>
                      </div>
                      <div className="mt-auto pt-2 border-top">
                        <p className="fw-bold text-success mb-0 fs-5">
                          {company.package || company.salary || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Dashboard;