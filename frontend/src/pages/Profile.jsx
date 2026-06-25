import { useEffect, useState } from "react";
import axios from "axios";
import "/src/styles/Profile.css";

import Projects from "../components/profile/Projects";
import Certifications from "../components/profile/Certifications";
import Internships from "../components/profile/Internships";
import Achievements from "../components/profile/Achievements";
import CodingProfiles from "../components/profile/CodingProfiles";
import Resume from "../components/profile/Resume";

function Profile() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [profileData, setProfileData] = useState({
    user: {},
    profile: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const handleArrayChange = (section, index, field, value) => {
    setEditedProfile((prev) => {
      const updated = [...(prev[section] || [])];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return {
        ...prev,
        [section]: updated,
      };
    });
  };

  const addArrayItem = (section, template) => {
    setEditedProfile((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), template],
    }));
  };

  const removeArrayItem = (section, index) => {
    setEditedProfile((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://localhost:5000/api/profile/${loggedInUser.collegeemail}`,
      );

      setProfileData(response.data.data);
      const profile = response.data.data.profile || {};

      setEditedProfile({
        ...profile,

        technicalSkills: (profile.technicalSkills || []).join(", "),

        programmingLanguages: (profile.programmingLanguages || []).join(", "),

        softSkills: (profile.softSkills || []).join(", "),
      });
      setError("");
    } catch (err) {
      console.error(err);

      setError(err.response?.data?.message || "Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = () => {
    const profile = profileData.profile || {};

    setEditedProfile({
      ...profile,
      technicalSkills: (profile.technicalSkills || []).join(", "),
      programmingLanguages: (profile.programmingLanguages || []).join(", "),
      softSkills: (profile.softSkills || []).join(", "),
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    const profile = profileData.profile || {};

    setEditedProfile({
      ...profile,
      technicalSkills: (profile.technicalSkills || []).join(", "),
      programmingLanguages: (profile.programmingLanguages || []).join(", "),
      softSkills: (profile.softSkills || []).join(", "),
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      console.log("Sending:", editedProfile);
      const payload = {
        ...editedProfile,

        technicalSkills: editedProfile.technicalSkills
          ? editedProfile.technicalSkills
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],

        programmingLanguages: editedProfile.programmingLanguages
          ? editedProfile.programmingLanguages
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],

        softSkills: editedProfile.softSkills
          ? editedProfile.softSkills
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
      };
      await axios.put(
        `http://localhost:5000/api/profile/update/${loggedInUser.collegeemail}`,
        payload,
      );

      await fetchProfile();

      setIsEditing(false);

      alert("Profile updated successfully.");
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Failed to update profile.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <h5 className="mt-3">Loading Profile...</h5>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  const user = profileData.user;
  const profile = profileData.profile;
  const displayValue = (value) => {
    return value && value !== "" ? value : "Not Added Yet";
  };

  const renderBadges = (items) => {
    if (!items || items.length === 0) {
      return <p className="text-muted mb-0">Not Added Yet</p>;
    }

    return items.map((item, index) => (
      <span key={index} className="badge skill-badge">
        {item}
      </span>
    ));
  };
  const profileImage =
    profile?.profilePicture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.fullName,
    )}&background=1e3a8a&color=ffffff&size=200`;

  return (
    <div className="container-fluid profile-page">
      {/* Hero Section */}

      <div className="card border-0 shadow-sm profile-hero">
        <div className="row align-items-center">
          <div className="col-md-2 text-center">
            <img
              src={editedProfile.profilePicture || profileImage}
              alt="Profile"
              className="profile-avatar"
            />

            {isEditing && (
              <input
                type="text"
                className="form-control mt-3"
                name="profilePicture"
                placeholder="Image URL"
                value={editedProfile.profilePicture || ""}
                onChange={handleChange}
              />
            )}
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold text-white">{user.fullName}</h2>

            <p className="text-white mb-1">
              {user.department} | {user.year}
            </p>

            <p className="text-white mb-0">Roll No : {user.rollnumber}</p>
          </div>

          <div className="col-md-3 text-end">
            {/* <button
            className="btn btn-light"
            onClick={handleEdit}
            >

              Edit Profile

            </button> */}
            <div className="d-flex justify-content-end">
              {isEditing ? (
                <>
                  <button className="btn btn-success me-2" onClick={handleSave}>
                    Save Changes
                  </button>

                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="btn btn-light" onClick={handleEdit}>
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Personal Information */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0 fw-bold text-primary">Personal Information</h4>
        </div>

        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="info-item">
                <label>Full Name</label>
                <p>{user.fullName}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Username</label>
                <p>{user.username}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>College Email</label>
                <p>{user.collegeemail}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Personal Email</label>
                <p>{user.personalemail}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Gender</label>
                <p>{user.gender}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Roll Number</label>
                <p>{user.rollnumber}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Department</label>
                <p>{user.department}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>Year</label>
                <p>{user.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Academic Details */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0 fw-bold text-primary">Academic Details</h4>
        </div>

        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="info-item">
                <label>Semester</label>

                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="semester"
                    value={editedProfile.semester || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{displayValue(profile?.semester)}</p>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>CGPA</label>

                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="cgpa"
                    value={editedProfile.cgpa || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{displayValue(profile?.cgpa)}</p>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>10th Percentage</label>

                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="tenthPercentage"
                    value={editedProfile.tenthPercentage || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{displayValue(profile?.tenthPercentage)}</p>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item">
                <label>12th Percentage</label>

                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="twelfthPercentage"
                    value={editedProfile.twelfthPercentage || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{displayValue(profile?.twelfthPercentage)}</p>
                )}
              </div>
            </div>

            <div className="col-md-12">
              <div className="info-item">
                <label>Active Backlogs</label>

                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="activeBacklogs"
                    value={editedProfile.activeBacklogs || ""}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{displayValue(profile?.activeBacklogs)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0 fw-bold text-primary">Skills</h4>
        </div>

        <div className="card-body">
          {/* Technical Skills */}

          <div className="mb-4">
            <h6 className="skill-title">Technical Skills</h6>

            {isEditing ? (
              <textarea
                rows={2}
                className="form-control"
                name="technicalSkills"
                placeholder="React, Node.js, MongoDB, Docker"
                value={editedProfile.technicalSkills || ""}
                onChange={handleChange}
              />
            ) : (
              renderBadges(profile?.technicalSkills)
            )}
          </div>

          {/* Programming Languages */}

          <div className="mb-4">
            <h6 className="skill-title">Programming Languages</h6>

            {isEditing ? (
              <textarea
                rows={2}
                className="form-control"
                name="programmingLanguages"
                placeholder="Java, Python, C++"
                value={editedProfile.programmingLanguages || ""}
                onChange={handleChange}
              />
            ) : (
              renderBadges(profile?.programmingLanguages)
            )}
          </div>

          {/* Soft Skills */}

          <div>
            <h6 className="skill-title">Soft Skills</h6>

            {isEditing ? (
              <textarea
                rows={2}
                className="form-control"
                name="softSkills"
                placeholder="Leadership, Communication, Teamwork"
                value={editedProfile.softSkills || ""}
                onChange={handleChange}
              />
            ) : (
              renderBadges(profile?.softSkills)
            )}
          </div>
        </div>
      </div>

      <Projects
        projects={editedProfile.projects || []}
        isEditing={isEditing}
        onChange={handleArrayChange}
        onAdd={addArrayItem}
        onRemove={removeArrayItem}
      />

      <Certifications
        certifications={editedProfile.certifications || []}
        isEditing={isEditing}
        onChange={handleArrayChange}
        onAdd={addArrayItem}
        onRemove={removeArrayItem}
      />

      <Internships
        internships={editedProfile.internships || []}
        isEditing={isEditing}
        onChange={handleArrayChange}
        onAdd={addArrayItem}
        onRemove={removeArrayItem}
      />

      <Achievements
        achievements={editedProfile.achievements || []}
        isEditing={isEditing}
        onChange={handleArrayChange}
        onAdd={addArrayItem}
        onRemove={removeArrayItem}
      />

      <CodingProfiles
        profile={profile}
        editedProfile={editedProfile}
        isEditing={isEditing}
        handleChange={handleChange}
        displayValue={displayValue}
      />

      <Resume
        profile={profile}
        editedProfile={editedProfile}
        isEditing={isEditing}
        handleChange={handleChange}
        displayValue={displayValue}
      />
    </div>
  );
}

export default Profile;