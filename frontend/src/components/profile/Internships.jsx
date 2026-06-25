import React from "react";

const emptyInternship = {
    company: "",
    role: "",
    duration: "",
    description: "",
};

function Internships({
    internships,
    isEditing,
    onChange,
    onAdd,
    onRemove,
}) {
    return (
        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                <h4 className="mb-0 fw-bold text-primary">
                    Internships
                </h4>

                {
                    isEditing && (
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                                onAdd("internships", emptyInternship)
                            }
                        >
                            + Add Internship
                        </button>
                    )
                }

            </div>

            <div className="card-body">

                {
                    internships.length === 0 ? (

                        <p className="text-muted mb-0">
                            No Internships Added Yet
                        </p>

                    ) : (

                        internships.map((internship, index) => (

                            <div
                                key={index}
                                className="border rounded p-3 mb-4"
                            >

                                {
                                    isEditing ? (

                                        <>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Company Name
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={internship.company}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "internships",
                                                            index,
                                                            "company",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Role
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={internship.role}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "internships",
                                                            index,
                                                            "role",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Duration
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g. Jan 2025 - Mar 2025"
                                                    value={internship.duration}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "internships",
                                                            index,
                                                            "duration",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Description
                                                </label>

                                                <textarea
                                                    rows="4"
                                                    className="form-control"
                                                    value={internship.description}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "internships",
                                                            index,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="text-end">

                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() =>
                                                        onRemove(
                                                            "internships",
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove Internship
                                                </button>

                                            </div>

                                        </>

                                    ) : (

                                        <>

                                            <h5 className="fw-bold">
                                                {internship.role}
                                            </h5>

                                            <p className="mb-1">
                                                <strong>Company:</strong>{" "}
                                                {internship.company}
                                            </p>

                                            {
                                                internship.duration && (

                                                    <p className="mb-1">
                                                        <strong>Duration:</strong>{" "}
                                                        {internship.duration}
                                                    </p>

                                                )
                                            }

                                            {
                                                internship.description && (

                                                    <p className="mb-0">
                                                        {internship.description}
                                                    </p>

                                                )
                                            }

                                        </>

                                    )
                                }

                            </div>

                        ))

                    )
                }

            </div>

        </div>
    );
}

export default Internships;