import React from "react";

function Resources() {
  const courses = [
    {
      id: 1,
      title: "Java Full Stack",
      description: "Learn Java, Spring Boot, React, MySQL, and build full-stack applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#f89820" viewBox="0 0 16 16">
          <path d="M1.5 5.5A.5.5 0 0 1 2 5h12a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 6v6h12V6zm1.5 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM7 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 7 8m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 7 10"/>
          <path d="M11.5 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-3 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m-3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"/>
        </svg>
      ),
      url: "https://www.youtube.com/results?search_query=java+full+stack+course",
    },
    {
      id: 2,
      title: "MERN Stack",
      description: "Master MongoDB, Express.js, React.js, and Node.js.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#198754" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-3.074a.5.5 0 0 1 .257.437.5.5 0 0 1-.257.437L4 13.223v-2.846zM7 14.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M4.5 1c-2.5 0-4.5 2-4.5 4.5S2 10 4.5 10 9 8 9 5.5 7 1 4.5 1"/>
        </svg>
      ),
      url: "https://www.youtube.com/results?search_query=mern+stack+course",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Prepare for coding interviews and placement tests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#0d6efd" viewBox="0 0 16 16">
          <path d="M8.417 5.74a1.5 1.5 0 1 0-1.017-.163V7.25h-1.9a1 1 0 0 0-.918.607L3.486 10.45A1.5 1.5 0 1 0 4.5 12.5h1.9a1 1 0 0 0 .918-.607l1.093-2.593h2.378l1.093 2.593a1 1 0 0 0 .918.607h1.9a1.5 1.5 0 1 0 1.013-2.05l-1.096-2.593A1 1 0 0 0 12.9 7.25h-1.9V5.577a1.5 1.5 0 0 0-.583-2.337V1.5a1.5 1.5 0 1 0-1 0v1.74a1.5 1.5 0 0 0-.583 2.5M12 12.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"/>
        </svg>
      ),
      url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    },
    {
      id: 4,
      title: "Aptitude Training",
      description: "Improve quantitative aptitude, reasoning, and verbal skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#ffc107" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
        </svg>
      ),
      url: "https://www.indiabix.com/",
    },
    {
      id: 5,
      title: "Python Programming",
      description: "Learn Python fundamentals, OOP, and problem-solving.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#0275d8" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
        </svg>
      ),
      url: "https://www.youtube.com/results?search_query=python+programming+course",
    },
    {
      id: 6,
      title: "Communication Skills",
      description: "Develop professional communication and interview skills.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#ec4899" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        </svg>
      ),
      url: "https://www.youtube.com/results?search_query=communication+skills+for+placements",
    },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: "1140px" }}>
      <h1 className="display-6 fw-bold text-center mb-5">
        Placement Preparation Courses
      </h1>

      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {courses.map((course) => (
          <div key={course.id} className="col">
            <div className="card h-100 border border-light-subtle rounded-4 shadow-sm text-center p-4 d-flex flex-column align-items-center justify-content-between">
              
              <div className="card-body d-flex flex-column align-items-center p-0 w-100">
                <div className="mb-3">
                  {course.icon}
                </div>

                <h5 className="card-title fw-semibold mb-2">
                  {course.title}
                </h5>

                <p className="card-text text-muted small mb-6" style={{ minHeight: "56px" }}>
                  {course.description}
                </p>
              </div>

              <a
                href={course.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-100 py-2 fw-medium rounded-3"
              >
                View Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;