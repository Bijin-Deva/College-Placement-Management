import { useState } from "react";
import axios from 'axios';
export default function JobManager() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [logourl, setLogoUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [workModel, setWorkModel] = useState("");
  const [lastDate, setLastDate] = useState("");

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
            const response = await axios.post(
                "http://localhost:5000/api/jobs",
                jobData
            );
            alert("Job created successfully!");
            setIsOpen(false);
            setLogoUrl("");
            setJobTitle("");
            setDescription("");
            setSkills("");
            setSalary("");
            setWorkModel("");
            setLastDate("");
        } catch (error) {
            console.error("Error creating job:", error);
            alert("Error creating job. Please try again.");
        }
    };

    const handleCancel = () => {
        setIsOpen(false);
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
          onClick={() => setIsOpen(true)} 
        >
          Create Job
        </button>
      </div>

      {isOpen && (
        <div style={{border:"1px solid black", padding: "20px", marginTop: "20px", borderRadius: "5px"}}>
          <div>
            <h3>Create New Job</h3>
            <hr />
            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>
                    Company Logo URL
                </label>
                <input type="url" className="form-control" value={logourl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://example.com/logo.png" style={{ width: "100%", padding: "8px" }} required />
                <small style={{ color: "#6c757d", display: "block", marginTop: "4px" }}> Provide a direct link to the image (PNG, JPG).</small>
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
                <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 3-9lpa" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Work Model:</label>
                <input type="text" className="form-control" value={workModel} onChange={(e) => setWorkModel(e.target.value)} placeholder="e.g. Remote/On-site" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>Last Date to apply: </label>
                <input type="text" className="form-control" value={lastDate} onChange={(e) => setLastDate(e.target.value)} placeholder="e.g. 31-7-2026" style={{ width: "100%", padding: "8px" }} required />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Job
                </button>
              </div>
            </form>

          </div>
        </div>
      )}


    </div>
  );
}

