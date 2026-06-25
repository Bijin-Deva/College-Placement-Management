import React from "react";

const emptyCertification = {
    title: "",
    issuer: "",
    issueDate: "",
    certificateLink: "",
};

function Certifications({
    certifications,
    isEditing,
    onChange,
    onAdd,
    onRemove,
}) {
    return (
        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                <h4 className="mb-0 fw-bold text-primary">
                    Certifications
                </h4>

                {
                    isEditing && (
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                                onAdd("certifications", emptyCertification)
                            }
                        >
                            + Add Certification
                        </button>
                    )
                }

            </div>

            <div className="card-body">

                {
                    certifications.length === 0 ? (

                        <p className="text-muted mb-0">
                            No Certifications Added Yet
                        </p>

                    ) : (

                        certifications.map((certification, index) => (

                            <div
                                key={index}
                                className="border rounded p-3 mb-4"
                            >

                                {
                                    isEditing ? (

                                        <>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Certification Title
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={certification.title}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "certifications",
                                                            index,
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Issuing Organization
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={certification.issuer}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "certifications",
                                                            index,
                                                            "issuer",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Issue Date
                                                </label>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={
                                                        certification.issueDate
                                                            ? certification.issueDate.substring(
                                                                  0,
                                                                  10
                                                              )
                                                            : ""
                                                    }
                                                    onChange={(e) =>
                                                        onChange(
                                                            "certifications",
                                                            index,
                                                            "issueDate",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Certificate Link
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="https://..."
                                                    value={
                                                        certification.certificateLink
                                                    }
                                                    onChange={(e) =>
                                                        onChange(
                                                            "certifications",
                                                            index,
                                                            "certificateLink",
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
                                                            "certifications",
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove Certification
                                                </button>

                                            </div>

                                        </>

                                    ) : (

                                        <>

                                            <h5 className="fw-bold">
                                                {certification.title}
                                            </h5>

                                            <p className="mb-1">
                                                <strong>Issued By:</strong>{" "}
                                                {certification.issuer}
                                            </p>

                                            {
                                                certification.issueDate && (

                                                    <p className="mb-1">
                                                        <strong>Issue Date:</strong>{" "}
                                                        {new Date(
                                                            certification.issueDate
                                                        ).toLocaleDateString()}
                                                    </p>

                                                )
                                            }

                                            {
                                                certification.certificateLink && (

                                                    <a
                                                        href={
                                                            certification.certificateLink
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        View Certificate
                                                    </a>

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

export default Certifications;