import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState(null);

  // Form Fields matched to your updated Mongoose Schema (No skills field)
  const [logoUrl, setLogoUrl] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseLink, setCourseLink] = useState("");

  const formRef = useRef(null);

  // 1. READ: Fetch courses from database on mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        const fetchedCourses = Array.isArray(response.data) 
          ? response.data 
          : response.data.courses || [];
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  // 2. CREATE & UPDATE Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = {
      logoUrl,
      courseTitle,
      description,
      courseLink,
    };

    try {
      if (editingCourseId) {
        // PUT request
        const response = await axios.put(`http://localhost:5000/api/courses/${editingCourseId}`, courseData);
        
        setCourses((prev) =>
          prev.map((c) => (c._id === editingCourseId ? response.data || { ...c, ...courseData } : c))
        );
        alert("Course updated successfully!");
      } else {
        // POST request
        const response = await axios.post("http://localhost:5000/api/courses", courseData);
        if (response.data) {
          setCourses((prev) => [...prev, response.data]);
        }
        alert("Course created successfully!");
      }
      handleCancel();
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Error saving course. Please try again.");
    }
  };

  // Populate form for editing
  const handleEdit = (course) => {
    setEditingCourseId(course._id);
    setLogoUrl(course.logoUrl || "");
    setCourseTitle(course.courseTitle || "");
    setDescription(course.description || "");
    setCourseLink(course.courseLink || "");
    setIsOpen(true);
    
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  // 3. DELETE Handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course permanently?")) {
      try {
        await axios.delete(`http://localhost:5000/api/courses/${id}`);
        setCourses((prev) => prev.filter((c) => c._id !== id));
        alert("Course deleted successfully!");
      } catch (error) {
        console.error("Error deleting course:", error);
        alert("Failed to delete the course. Please try again.");
      }
    }
  };

  // Reset form states
  const handleCancel = () => {
    setIsOpen(false);
    setEditingCourseId(null);
    setLogoUrl("");
    setCourseTitle("");
    setDescription("");
    setCourseLink("");
  };

  return (
    <div className="container py-4" style={{ maxWidth: "1140px", position: "relative" }}>
      
      {/* Create Button Top Right */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button 
          className="btn btn-primary btn-lg" 
          style={{ marginTop: "10px" }}
          onClick={() => { handleCancel(); setIsOpen(true); }} 
        >
          Add New Course
        </button>
      </div>

      {/* Admin Action Form Box */}
      {isOpen && (
        <div ref={formRef} style={{ border: "1px solid black", padding: "20px", marginTop: "20px", borderRadius: "8px", backgroundColor: "#fff" }}>
          <div>
            <h3>{editingCourseId ? "Edit Course Details" : "Create New Course"}</h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Course Logo/Icon URL</label>
                <input type="url" className="form-control" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://example.com/icon.png" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Course Title</label>
                <input type="text" className="form-control" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} placeholder="e.g. Java Full Stack" style={{ width: "100%", padding: "8px" }} required />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="What will students learn..." style={{ width: "100%", padding: "8px" }} required></textarea>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}>Course Resource URL Link</label>
                <input type="url" className="form-control" value={courseLink} onChange={(e) => setCourseLink(e.target.value)} placeholder="https://youtube.com/..." style={{ width: "100%", padding: "8px" }} required />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {editingCourseId ? "Update Course" : "Submit Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h1 className="display-6 fw-bold text-center mb-5" style={{ marginTop: "20px" }}>
        Placement Preparation Courses
      </h1>

      {/* Grid Layout maintaining row configurations (3 cards per row on large displays) */}
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style={{ marginBottom: "35px" }}>
        {courses.map((course, index) => (
          <div key={course._id || index} className="col">
            <div className="card h-100 border border-light-subtle rounded-4 shadow-sm d-flex flex-column justify-content-between overflow-hidden" style={{ backgroundColor: "#fff" }}>
              
              {/* Image Banner Section (Unconstrained by card padding) */}
              <div style={{ height: "160px", width: "100%", overflow: "hidden", backgroundColor: "#f8f9fa", borderBottom: "1px solid #eee" }}>
                {course.logoUrl && course.logoUrl.startsWith("<svg") ? (
                  <div 
                    style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "15px" }} 
                    dangerouslySetInnerHTML={{ __html: course.logoUrl }} 
                  />
                ) : (
                  <img 
                    src={course.logoUrl} 
                    alt={`${course.courseTitle} Banner`} 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = "https://via.placeholder.com/450x260?text=Course+Image"; 
                    }} 
                  />
                )}
              </div>

              {/* Text Context & Actions Layout */}
              <div className="card-body d-flex flex-column align-items-center p-4 w-100 text-center">
                <h5 className="card-title fw-semibold mb-2">
                  {course.courseTitle}
                </h5>

                <p className="card-text text-muted small mb-4" style={{ minHeight: "56px" }}>
                  {course.description}
                </p>

                {/* Bottom Action Rows */}
                <div className="w-100 d-flex flex-column gap-2 mt-auto">
                  <a
                    href={course.courseLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-100 py-2 fw-medium rounded-3"
                  >
                    View Course
                  </a>

                  {/* Admin controls */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button 
                      className="btn btn-sm" 
                      style={{ flex: 1, fontWeight: "500", fontSize: "16px", border: "1px solid #ccc", color: "orange" }}
                      onClick={() => handleEdit(course)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm" 
                      style={{ flex: 1, fontWeight: "500", fontSize: "16px", border: "1px solid #ccc", color: "red" }}
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;