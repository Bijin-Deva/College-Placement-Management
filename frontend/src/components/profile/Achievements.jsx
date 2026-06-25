import React from "react";

const emptyAchievement = {
    title: "",
    description: "",
    date: "",
};

function Achievements({
    achievements,
    isEditing,
    onChange,
    onAdd,
    onRemove,
}) {
    return (
        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                <h4 className="mb-0 fw-bold text-primary">
                    Achievements
                </h4>

                {
                    isEditing && (
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                                onAdd("achievements", emptyAchievement)
                            }
                        >
                            + Add Achievement
                        </button>
                    )
                }

            </div>

            <div className="card-body">

                {
                    achievements.length === 0 ? (

                        <p className="text-muted mb-0">
                            No Achievements Added Yet
                        </p>

                    ) : (

                        achievements.map((achievement, index) => (

                            <div
                                key={index}
                                className="border rounded p-3 mb-4"
                            >

                                {
                                    isEditing ? (

                                        <>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Achievement Title
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={achievement.title}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "achievements",
                                                            index,
                                                            "title",
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
                                                    value={achievement.description}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "achievements",
                                                            index,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">
                                                    Achievement Date
                                                </label>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={
                                                        achievement.date
                                                            ? achievement.date.substring(
                                                                  0,
                                                                  10
                                                              )
                                                            : ""
                                                    }
                                                    onChange={(e) =>
                                                        onChange(
                                                            "achievements",
                                                            index,
                                                            "date",
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
                                                            "achievements",
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove Achievement
                                                </button>

                                            </div>

                                        </>

                                    ) : (

                                        <>

                                            <h5 className="fw-bold">
                                                {achievement.title}
                                            </h5>

                                            {
                                                achievement.date && (

                                                    <p className="mb-2 text-muted">
                                                        <strong>Date:</strong>{" "}
                                                        {new Date(
                                                            achievement.date
                                                        ).toLocaleDateString()}
                                                    </p>

                                                )
                                            }

                                            {
                                                achievement.description && (

                                                    <p className="mb-0">
                                                        {achievement.description}
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

export default Achievements;