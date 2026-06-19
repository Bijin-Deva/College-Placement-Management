import { useState, useEffect } from "react";
import axios from 'axios';

export default function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  

  const [editingJobId, setEditingJobId] = useState(null);

  const [logourl, setLogoUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [workModel, setWorkModel] = useState("");
  const [lastDate, setLastDate] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        const fetchedJobs = Array.isArray(response.data) ? response.data : response.data.jobs || [];
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      logourl,
      jobTitle,
      description,
      skills,
      salary,
      workModel,
      lastDate,
    };

    try {
      if (editingJobId) {
        
        const response = await axios.put(`http://localhost:5000/api/jobs/${editingJobId}`, jobData);
        
        setJobs((prevJobs) =>
          prevJobs.map((job) => (job._id === editingJobId ? response.data.job || { ...job, ...jobData } : job))
        );
        alert("Job updated successfully!");
      } else {
        const response = await axios.post("http://localhost:5000/api/jobs", jobData);
        if (response.data && response.data.job) {
          setJobs((prevJobs) => [...prevJobs, response.data.job]);
        } else {
          setJobs((prevJobs) => [...prevJobs, { ...jobData, _id: Date.now().toString() }]);
        }
        alert("Job created successfully!");
      }
      
      handleCancel(); 
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Error saving job. Please try again.");
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setLogoUrl(job.logourl || job.logoUrl || "");
    setJobTitle(job.jobTitle || "");
    setDescription(job.description || "");
    setSkills(job.skills || "");
    setSalary(job.salary || job.expectedSalary || "");
    setWorkModel(job.workModel || "");
    setLastDate(job.lastDate || job.lastDateToApply || "");
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll up to show form
  };


  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job permanently?")) {
      try {
        await axios.delete(`http://localhost:5000/api/jobs/${id}`);
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        alert("Job deleted successfully!");
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Failed to delete the job. Please try again.");
      }
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setEditingJobId(null);
    setLogoUrl("");
    setJobTitle("");
    setDescription("");
    setSkills("");
    setSalary("");
    setWorkModel("");
    setLastDate("");
  };

  return (
    <div style={{ padding: "0px", position: "relative" }}>
      
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button 
          className="btn btn-primary btn-lg" 
          style={{ marginTop: "10px" }}
          onClick={() => { handleCancel(); setIsOpen(true); }} 
        >
          Create Job
        </button>
      </div>

      {isOpen && (
        <div style={{border:"1px solid black", padding: "20px", marginTop: "20px", borderRadius: "5px"}}>
          <div>
            <h3>{editingJobId ? "Edit Job Details" : "Create New Job"}</h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Company Logo URL</label>
                <input type="url" className="form-control" value={logourl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://example.com/logo.png" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Job Title</label>
                <input type="text" className="form-control" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="e.g. Software Engineer" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job details..." style={{ width: "100%", padding: "8px" }} required></textarea>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Skills</label>
                <input type="text" className="form-control" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. Python" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Expected Salary</label>
                <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 4-6 Lpa" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Work Model:</label>
                <input type="text" className="form-control" value={workModel} onChange={(e) => setWorkModel(e.target.value)} placeholder="e.g. Remote/On-site" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Last Date to apply: </label>
                <input type="text" className="form-control" value={lastDate} onChange={(e) => setLastDate(e.target.value)} placeholder="e.g. 25/08/2026" style={{ width: "100%", padding: "8px" }} required />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {editingJobId ? "Update Job" : "Submit Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px" }}>
        {jobs.map((job, index) => (
          <div key={job._id || index} style={cardStyle}>
            
            <div style={logoSectionStyle}>
              <img 
                src={job.logourl || job.logoUrl} 
                alt={`${job.jobTitle} Logo`} 
                style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/150?text=No+Logo"; 
                }} 
              />
            </div>

            <div style={detailsSectionStyle}>
              <div>
                <h4 style={{ margin: "0 0 5px 0", color: "#007bff", fontSize: "18px" }}>{job.jobTitle}</h4>
                <p style={{ margin: "0 0 12px 0", fontSize: "13px", color: "#6c757d", height: "38px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                  {job.description}
                </p>
                
                <div style={{ fontSize: "12px", lineHeight: "1.5", marginBottom: "15px" }}>
                  <div><strong>Skills:</strong> {job.skills}</div>
                  <div><strong>Salary:</strong> {job.salary || job.expectedSalary}</div>
                  <div><strong>Work Model:</strong> {job.workModel}</div>
                  <div><strong>Deadline:</strong> {job.lastDate || job.lastDateToApply}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <button 
                  className="btn btn-sm" 
                  style={{ flex: 1, fontWeight: "500", fontSize:"18px",border:"1px solid black" ,color:"orange"}}
                  onClick={() => handleEdit(job)}
                >
                  Edit
                </button>
                <button 
                  className="btn  btn-sm" 
                  style={{ flex: 1, fontWeight: "500" , fontSize:"18px",border:"1px solid black" ,color:"red"}}
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

const cardStyle = { display: "flex", flexDirection: "column", border: "1px solid #dee2e6", borderRadius: "8px", overflow: "hidden", height: "420px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", backgroundColor: "#fff" };
const logoSectionStyle = { height: "150px", backgroundColor: "#f8f9fa", display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #dee2e6", padding: "15px" };
const detailsSectionStyle = { flex: "1", padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" };