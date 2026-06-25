import React from "react";

function CodingProfiles({
    profile,
    editedProfile,
    isEditing,
    handleChange,
    displayValue,
}) {

    const renderField = (
        label,
        name,
        placeholder = ""
    ) => (

        <div className="col-md-6 mb-4">

            <label className="form-label fw-semibold">

                {label}

            </label>

            {
                isEditing ? (

                    <input
                        type="text"
                        className="form-control"
                        name={name}
                        placeholder={placeholder}
                        value={editedProfile[name] || ""}
                        onChange={handleChange}
                    />

                ) : (

                    profile?.[name] ? (

                        <a
                            href={profile[name]}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {profile[name]}
                        </a>

                    ) : (

                        <p className="mb-0 text-muted">
                            {displayValue(profile?.[name])}
                        </p>

                    )

                )
            }

        </div>

    );

    return (

        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3">

                <h4 className="mb-0 fw-bold text-primary">

                    Coding Profiles & Professional Links

                </h4>

            </div>

            <div className="card-body">

                <div className="row">

                    {renderField(
                        "GitHub",
                        "github",
                        "https://github.com/username"
                    )}

                    {renderField(
                        "LinkedIn",
                        "linkedin",
                        "https://linkedin.com/in/username"
                    )}

                    {renderField(
                        "Portfolio",
                        "portfolio",
                        "https://yourportfolio.com"
                    )}

                    {renderField(
                        "LeetCode",
                        "leetcode",
                        "https://leetcode.com/username"
                    )}

                    {renderField(
                        "HackerRank",
                        "hackerrank",
                        "https://hackerrank.com/username"
                    )}

                    {renderField(
                        "CodeChef",
                        "codechef",
                        "https://codechef.com/users/username"
                    )}

                </div>

            </div>

        </div>

    );

}

export default CodingProfiles;