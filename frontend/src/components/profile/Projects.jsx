import React from "react";

const emptyProject = {
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    projectLink: "",
};

function Projects({
    projects,
    isEditing,
    onChange,
    onAdd,
    onRemove,
}) {
    return (
        <div className="card shadow-sm border-0 mt-4">

            <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">

                <h4 className="mb-0 fw-bold text-primary">

                    Projects

                </h4>

                {
                    isEditing &&

                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                            onAdd("projects", emptyProject)
                        }
                    >
                        + Add Project
                    </button>
                }

            </div>

            <div className="card-body">

                {
                    projects.length === 0 ?

                        <p className="text-muted mb-0">

                            No Projects Added Yet

                        </p>

                        :

                        projects.map((project, index) => (

                            <div
                                key={index}
                                className="border rounded p-3 mb-4"
                            >

                                {
                                    isEditing ?

                                        <>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">

                                                    Project Title

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={project.title}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "projects",
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
                                                    rows="3"
                                                    className="form-control"
                                                    value={project.description}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "projects",
                                                            index,
                                                            "description",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">

                                                    Technologies

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="React, Node.js, MongoDB"
                                                    value={project.technologies}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "projects",
                                                            index,
                                                            "technologies",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">

                                                    GitHub Link

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={project.githubLink}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "projects",
                                                            index,
                                                            "githubLink",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                            </div>

                                            <div className="mb-3">

                                                <label className="form-label fw-semibold">

                                                    Live Project Link

                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={project.projectLink}
                                                    onChange={(e) =>
                                                        onChange(
                                                            "projects",
                                                            index,
                                                            "projectLink",
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
                                                            "projects",
                                                            index
                                                        )
                                                    }
                                                >
                                                    Remove Project
                                                </button>

                                            </div>

                                        </>

                                        :

                                        <>

                                            <h5 className="fw-bold">

                                                {project.title}

                                            </h5>

                                            <p>

                                                {project.description}

                                            </p>

                                            {
                                                project.technologies &&

                                                <p>

                                                    <strong>

                                                        Technologies:

                                                    </strong>{" "}

                                                    {project.technologies}

                                                </p>

                                            }

                                            <div className="d-flex gap-3 flex-wrap">

                                                {
                                                    project.githubLink &&

                                                    <a
                                                        href={project.githubLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        GitHub
                                                    </a>

                                                }

                                                {
                                                    project.projectLink &&

                                                    <a
                                                        href={project.projectLink}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Live Demo
                                                    </a>

                                                }

                                            </div>

                                        </>

                                }

                            </div>

                        ))

                }

            </div>

        </div>
    );
}

export default Projects;