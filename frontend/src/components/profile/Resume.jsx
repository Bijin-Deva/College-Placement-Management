import React from "react";

function Resume({
    profile,
    editedProfile,
    isEditing,
    handleChange,
    displayValue,
}) {

    return (

        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3">

                <h4 className="mb-0 fw-bold text-primary">

                    Resume

                </h4>

            </div>

            <div className="card-body">

                {
                    isEditing ?

                        <>

                            <label className="form-label fw-semibold">

                                Resume URL

                            </label>

                            <input
                                type="text"
                                className="form-control"
                                name="resumeUrl"
                                placeholder="https://drive.google.com/... or any public PDF URL"
                                value={editedProfile.resumeUrl || ""}
                                onChange={handleChange}
                            />

                            <small className="text-muted mt-2 d-block">

                                Paste a public Google Drive, OneDrive or PDF link.

                            </small>

                        </>

                        :

                        profile?.resumeUrl ?

                            <div>

                                <p className="mb-3">

                                    Your resume has been added.

                                </p>

                                <a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >

                                    View Resume

                                </a>

                            </div>

                            :

                            <p className="text-muted mb-0">

                                {displayValue(profile?.resumeUrl)}

                            </p>

                }

            </div>

        </div>

    );

}

export default Resume;