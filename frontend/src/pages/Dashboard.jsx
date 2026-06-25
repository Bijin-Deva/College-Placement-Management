// import React, { useState, useEffect } from "react";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";

// // Register all required Chart.js components including line elements
// ChartJS.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // 1. Centralized Buffer Data representing an administrative ecosystem
// const departmentBufferData = {
//   CSE: { active: 120, inactive: 15, unverified: 5, eligible: 135, placed: 110 },
//   CSM: { active: 80, inactive: 10, unverified: 2, eligible: 90, placed: 72 },
//   ECE: { active: 100, inactive: 20, unverified: 8, eligible: 115, placed: 85 },
//   EEE: { active: 60, inactive: 12, unverified: 4, eligible: 70, placed: 45 },
//   CIVIL: { active: 45, inactive: 18, unverified: 6, eligible: 60, placed: 25 },
//   MECH: { active: 70, inactive: 15, unverified: 5, eligible: 80, placed: 40 },
// };

// const companyFunnelBuffer = {
//   labels: ["TCS", "Infosys", "Cognizant", "Wipro", "Accenture"],
//   registered: [200, 180, 150, 140, 160],
//   clearedTest: [120, 90, 85, 70, 95],
//   shortlisted: [60, 45, 50, 40, 55],
//   finalOffers: [35, 28, 30, 22, 32],
// };

// const salaryPackageBuffer = {
//   brackets: ["< 5 LPA", "5-10 LPA", "10-15 LPA", "15+ LPA"],
//   counts: [120, 185, 55, 14], // Student distribution across packages
// };

// function Dashboard({ search = "", setSearch = () => {} }) {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedDept, setSelectedDept] = useState("CSE");

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5000/api/jobs"); 
//         if (!response.ok) {
//           throw new Error("Failed to fetch opportunities data");
//         }
//         const data = await response.json();
//         setCompanies(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   const user = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
//   const departments = Object.keys(departmentBufferData);

//   // Global Administrative Aggregations
//   const totalEligible = Object.values(departmentBufferData).reduce((sum, d) => sum + d.eligible, 0);
//   const totalPlaced = Object.values(departmentBufferData).reduce((sum, d) => sum + d.placed, 0);
//   const totalStudents = Object.values(departmentBufferData).reduce((sum, d) => sum + d.active + d.inactive + d.unverified, 0);
//   const placementRate = totalEligible > 0 ? Math.round((totalPlaced / totalEligible) * 100) : 0;

//   const currentDeptStats = departmentBufferData[selectedDept] || departmentBufferData["CSE"];

//   // --- CHART CONFIGURATIONS ---

//   // 1. Circular Placement Rate Indicator (Doughnut)
//   const placementRateData = {
//     labels: ["Placed", "Unplaced Eligible"],
//     datasets: [
//       {
//         data: [totalPlaced, totalEligible - totalPlaced],
//         backgroundColor: ["#10b981", "#e5e7eb"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const placementRateOptions = {
//     plugins: { legend: { display: false }, tooltip: { enabled: true } },
//     cutout: "75%",
//     maintainAspectRatio: false,
//   };

//   // 2. Student Activity Status (Focused Pie Chart)
//   const pieChartData = {
//     labels: ["Active", "Inactive", "Unverified"],
//     datasets: [
//       {
//         data: [currentDeptStats.active, currentDeptStats.inactive, currentDeptStats.unverified],
//         backgroundColor: ["#10b981", "#ef4444", "#f59e0b"],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   // 3. Departmental Placement Comparison (Grouped Bar Chart)
//   const departmentalComparisonData = {
//     labels: departments,
//     datasets: [
//       {
//         label: "Total Eligible",
//         data: departments.map((dept) => departmentBufferData[dept].eligible),
//         backgroundColor: "#3b82f6",
//         borderRadius: 4,
//       },
//       {
//         label: "Total Placed",
//         data: departments.map((dept) => departmentBufferData[dept].placed),
//         backgroundColor: "#10b981",
//         borderRadius: 4,
//       },
//     ],
//   };

//   // 4. Company-Wise Application & Selection Recruitment Funnel (Stacked Bar Chart)
//   const funnelChartData = {
//     labels: companyFunnelBuffer.labels,
//     datasets: [
//       {
//         label: "Final Offers",
//         data: companyFunnelBuffer.finalOffers,
//         backgroundColor: "#10b981", // Green
//       },
//       {
//         label: "Shortlisted for Interview",
//         data: companyFunnelBuffer.shortlisted,
//         backgroundColor: "#f59e0b", // Amber
//       },
//       {
//         label: "Cleared Written Test",
//         data: companyFunnelBuffer.clearedTest,
//         backgroundColor: "#6366f1", // Indigo
//       },
//       {
//         label: "Registered",
//         data: companyFunnelBuffer.registered,
//         backgroundColor: "#9ca3af", // Gray
//       },
//     ],
//   };

//   const funnelChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: { stacked: true, grid: { display: false } },
//       y: { stacked: false, beginAtZero: true, grid: { color: "#f3f4f6" } }, 
//     },
//   };

//   // 5. Salary Package Distribution (Line Chart Trend)
//   const salaryLineData = {
//     labels: salaryPackageBuffer.brackets,
//     datasets: [
//       {
//         label: "Number of Students",
//         data: salaryPackageBuffer.counts,
//         fill: true,
//         backgroundColor: "rgba(59, 130, 246, 0.1)",
//         borderColor: "#3b82f6",
//         tension: 0.4,
//         pointBackgroundColor: "#1e3a8a",
//         pointBorderColor: "#fff",
//         pointHoverRadius: 6,
//       },
//     ],
//   };

//   return (
//     <div className="container-fluid p-0">

//       {/* Hero Welcome Banner */}
//       <div 
//         className="rounded-4 p-5 text-white mb-4" 
//         style={{ background: "linear-gradient(to right, #1e3a8a, #3b82f6)" }}
//       >
//         <h1 className="display-5 fw-bold mb-2">
//           Welcome Back, {user?.username || "Admin"}!
//         </h1>
//         <p className="lead mb-0 opacity-75">
//           Campus Recruitment Management & Performance Metrics Ecosystem.
//         </p>
//       </div>

//       {/* SECTION 1: Enhanced Overview Stat Cards */}
//       <div className="row g-3 mb-4">
//         {/* Card 1: Total Placed Rate Circular indicator */}
//         <div className="col-12 col-md-4">
//           <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
//             <p className="text-muted mb-2 fw-medium">Total Placed Rate</p>
//             <div className="d-flex align-items-center gap-3">
//               <div style={{ width: "70px", height: "70px", position: "relative" }}>
//                 <Doughnut data={placementRateData} options={placementRateOptions} />
//                 <div 
//                   className="position-absolute top-50 start-50 translate-middle fw-bold text-success small"
//                   style={{ fontSize: "0.9rem" }}
//                 >
//                   {placementRate}%
//                 </div>
//               </div>
//               <div>
//                 <h4 className="fw-bold text-dark mb-0">{totalPlaced} / {totalEligible}</h4>
//                 <p className="text-muted small mb-0">Eligible Students Placed</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Card 2: Active Drives */}
//         <div className="col-12 col-md-4">
//           <div className="card h-100 border-0 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-center">
//             <h2 className="display-6 fw-bold text-primary mb-1">
//               {loading ? "..." : companies.length}
//             </h2>
//             <p className="text-muted mb-1 fw-medium">Active Recruitment Drives</p>
//             <span className="badge bg-primary-subtle text-primary align-self-start rounded-pill px-2 py-1 small">
//               Live Campus Drives
//             </span>
//           </div>
//         </div>

//         {/* Card 3: Total Package Value insights */}
//         <div className="col-12 col-md-4">
//           <div className="card h-100 border-0 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-center">
//             <div className="row">
//               <div className="col-6 border-end">
//                 <h3 className="fw-bold text-dark mb-0">18.5 LPA</h3>
//                 <p className="text-muted small mb-0 fw-medium">Highest Package</p>
//               </div>
//               <div className="col-6 ps-3">
//                 <h3 className="fw-bold text-success mb-0">6.2 LPA</h3>
//                 <p className="text-muted small mb-0 fw-medium">Average Package</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 2 & 3: Main Placement Metrics Grid */}
//       <div className="card border-0 rounded-4 shadow-sm p-4 mb-4">
//         <div className="mb-4">
//           <h2 className="fs-3 fw-bold mb-1">Placement Metrics Dashboard</h2>
//           <p className="text-muted small mb-0">Comprehensive analytics across academic branches and recruitment lifecycles.</p>
//         </div>

//         <div className="row g-4">
//           {/* Activity Status Pie chart with departmental selector */}
//           <div className="col-12 col-lg-4">
//             <div className="p-4 border border-light-subtle rounded-4 h-100 bg-light-subtle d-flex flex-column align-items-center justify-content-between">
//               <div className="w-100 d-flex justify-content-between align-items-center mb-3">
//                 <h6 className="fw-bold text-secondary mb-0">Activity Status</h6>
//                 <select 
//                   className="form-select form-select-sm border-light-subtle rounded-3 shadow-sm fw-semibold w-auto"
//                   value={selectedDept}
//                   onChange={(e) => setSelectedDept(e.target.value)}
//                 >
//                   {departments.map(dept => (
//                     <option key={dept} value={dept}>{dept}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="my-auto w-100 d-flex justify-content-center" style={{ maxWidth: "220px" }}>
//                 <Pie data={pieChartData} />
//               </div>
//             </div>
//           </div>

//           {/* Departmental Placement Comparison Grouped Bar Chart */}
//           <div className="col-12 col-lg-8">
//             <div className="p-4 border border-light-subtle rounded-4 h-100 bg-light-subtle d-flex flex-column">
//               <h6 className="fw-bold text-secondary mb-3">Departmental Placement Comparison (Eligible vs Placed)</h6>
//               <div className="flex-grow-1" style={{ minHeight: "260px", position: "relative" }}>
//                 <Bar 
//                   data={departmentalComparisonData} 
//                   options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SECTION 4: Pipeline Funnels & Salary Distribution */}
//         <div className="row g-4 mt-2">
//           {/* Company Recruitment Pipeline Funnel */}
//           <div className="col-12 col-lg-7">
//             <div className="p-4 border border-light-subtle rounded-4 bg-light-subtle d-flex flex-column">
//               <h6 className="fw-bold text-secondary mb-3">Company-Wise Application & Selection Funnel</h6>
//               <div style={{ minHeight: "280px", position: "relative" }}>
//                 <Bar data={funnelChartData} options={funnelChartOptions} />
//               </div>
//             </div>
//           </div>

//           {/* Salary Bracket Line Distribution Chart */}
//           <div className="col-12 col-lg-5">
//             <div className="p-4 border border-light-subtle rounded-4 bg-light-subtle h-100 d-flex flex-column">
//               <h6 className="fw-bold text-secondary mb-3">Salary Package Distribution Trend</h6>
//               <div className="flex-grow-1 d-flex align-items-center" style={{ minHeight: "240px", position: "relative" }}>
//                 <Line 
//                   data={salaryLineData} 
//                   options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }} 
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar, Line, Doughnut, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const departmentBufferData = {
  CSE: { active: 120, inactive: 15, unverified: 5, eligible: 135, placed: 110 },
  CSM: { active: 80, inactive: 10, unverified: 2, eligible: 90, placed: 72 },
  ECE: { active: 100, inactive: 20, unverified: 8, eligible: 115, placed: 85 },
  EEE: { active: 60, inactive: 12, unverified: 4, eligible: 70, placed: 45 },
  CIVIL: { active: 45, inactive: 18, unverified: 6, eligible: 60, placed: 25 },
  MECH: { active: 70, inactive: 15, unverified: 5, eligible: 80, placed: 40 },
};

const companyFunnelBuffer = {
  labels: ["TCS", "Infosys", "Cognizant", "Wipro", "Accenture"],
  registered: [200, 180, 150, 140, 160],
  clearedTest: [120, 90, 85, 70, 95],
  shortlisted: [60, 45, 50, 40, 55],
  finalOffers: [35, 28, 30, 22, 32],
};

const salaryPackageBufferYoY = {
  brackets: ["< 5 LPA", "5-10 LPA", "10-15 LPA", "15+ LPA"],
  currentYear2026: [120, 185, 55, 14],
  pastYear2025: [150, 140, 32, 6], 
};

const drillDownStudentBuffer = {
  TCS: {
    registered: [
      { id: "239X1A3301", name: "A. Rahul", dept: "CSE", status: "Registered" },
      { id: "239X1A3345", name: "K. Sneha", dept: "ECE", status: "Registered" }
    ],
    clearedTest: [{ id: "239X1A3312", name: "P. Vikas", dept: "CSM", status: "Cleared Test" }],
    shortlisted: [{ id: "239X1A3319", name: "M. Harish", dept: "CSE", status: "Interview Shortlist" }],
    finalOffers: [{ id: "239X1A3350", name: "G. Swathi", dept: "CSE", status: "Offer Extended" }]
  },
  Infosys: {
    shortlisted: [
      { id: "239X1A3359", name: "B. Bijin", dept: "CSE", status: "Interview Shortlist" },
      { id: "239X1A3308", name: "J. Kiran", dept: "CSM", status: "Interview Shortlist" }
    ]
  }
};

function Dashboard({ search = "", setSearch = () => {} }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [isYoYEnabled, setIsYoYEnabled] = useState(false);
  const [gridSearch, setGridSearch] = useState("");
  const [drillDownInfo, setDrillDownInfo] = useState(null);
  
  const [modalDept, setModalDept] = useState(null);
  const [unverifiedCount, setUnverifiedCount] = useState(0);

  const funnelChartRef = useRef(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/jobs"); 
        if (!response.ok) throw new Error("Failed to fetch opportunities data");
        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const departments = Object.keys(departmentBufferData);
  const totalEligible = Object.values(departmentBufferData).reduce((sum, d) => sum + d.eligible, 0);
  const totalPlaced = Object.values(departmentBufferData).reduce((sum, d) => sum + d.placed, 0);
  const placementRate = totalEligible > 0 ? Math.round((totalPlaced / totalEligible) * 100) : 0;
  const currentDeptStats = departmentBufferData[selectedDept] || departmentBufferData["CSE"];

  const handleFunnelClick = (event) => {
    const { current: chart } = funnelChartRef;
    if (!chart) return;

    const element = getElementAtEvent(chart, event);
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    const companyName = companyFunnelBuffer.labels[index];
    
    const stages = ["finalOffers", "shortlisted", "clearedTest", "registered"];
    const currentStage = stages[datasetIndex];
    
    const students = drillDownStudentBuffer[companyName]?.[currentStage] || [
      { id: "239X1A3399", name: "Sample Student A", dept: "CSE", status: "Active Tracker State" },
      { id: "239X1A3388", name: "Sample Student B", dept: "CSM", status: "Active Tracker State" }
    ];

    setDrillDownInfo({
      company: companyName,
      stage: chart.data.datasets[datasetIndex].label,
      list: students
    });
  };

  const placementRateData = {
    labels: ["Placed", "Unplaced Eligible"],
    datasets: [{ data: [totalPlaced, totalEligible - totalPlaced], backgroundColor: ["#10b981", "#e5e7eb"], borderWidth: 0 }],
  };

  const pieChartData = {
    labels: ["Active", "Inactive", "Unverified"],
    datasets: [{ data: [currentDeptStats.active, currentDeptStats.inactive, currentDeptStats.unverified], backgroundColor: ["#10b981", "#ef4444", "#f59e0b"] }],
  };

  const departmentalComparisonData = {
    labels: departments,
    datasets: [
      { label: "Total Eligible", data: departments.map(d => departmentBufferData[d].eligible), backgroundColor: "#3b82f6", borderRadius: 4 },
      { label: "Total Placed", data: departments.map(d => departmentBufferData[d].placed), backgroundColor: "#10b981", borderRadius: 4 },
    ],
  };

  const funnelChartData = {
    labels: companyFunnelBuffer.labels,
    datasets: [
      { label: "Final Offers", data: companyFunnelBuffer.finalOffers, backgroundColor: "#10b981" },
      { label: "Shortlisted for Interview", data: companyFunnelBuffer.shortlisted, backgroundColor: "#f59e0b" },
      { label: "Cleared Written Test", data: companyFunnelBuffer.clearedTest, backgroundColor: "#6366f1" },
      { label: "Registered", data: companyFunnelBuffer.registered, backgroundColor: "#9ca3af" },
    ],
  };

  const salaryLineData = {
    labels: salaryPackageBufferYoY.brackets,
    datasets: [
      {
        label: "2026 (Current Year)",
        data: salaryPackageBufferYoY.currentYear2026,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
      ...(isYoYEnabled ? [{
        label: "2025 (Previous Year)",
        data: salaryPackageBufferYoY.pastYear2025,
        borderColor: "#9ca3af",
        backgroundColor: "transparent",
        borderDash: [6, 4],
        tension: 0.4,
      }] : [])
    ],
  };

  return (
    <div className="container-fluid p-4 pb-5">
      {/* Top Search Controls */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control rounded-pill border-0 shadow-sm p-3"
          style={{ maxWidth: "450px" }}
        />
      </div>

      {/* Hero Welcome Container */}
      <div className="rounded-4 p-5 text-white mb-4" style={{ background: "linear-gradient(to right, #1e3a8a, #3b82f6)" }}>
        <h1 className="display-5 fw-bold mb-2">Welcome Back, Admin!</h1>
        <p className="lead mb-0 opacity-75">Campus Recruitment Management & Institutional Performance Dashboard.</p>
      </div>

      {/* Overview Metric Display Cards Grid */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4">
            <p className="text-muted mb-2 fw-medium">Total Placed Rate</p>
            <div className="d-flex align-items-center gap-3">
              <div style={{ width: "70px", height: "70px", position: "relative" }}>
                <Doughnut data={placementRateData} options={{ plugins: { legend: { display: false } }, cutout: "75%", maintainAspectRatio: false }} />
                <div className="position-absolute top-50 start-50 translate-middle fw-bold text-success small">{placementRate}%</div>
              </div>
              <div>
                <h4 className="fw-bold text-dark mb-0">{totalPlaced} / {totalEligible}</h4>
                <p className="text-muted small mb-0">Eligible Placements Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-center">
            <h2 className="display-6 fw-bold text-primary mb-1">{loading ? "..." : companies.length}</h2>
            <p className="text-muted mb-1 fw-medium">Active Recruitment Drives</p>
            <span className="badge bg-primary-subtle text-primary align-self-start rounded-pill px-2 py-1 small">Live Active Tracks</span>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 border-0 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-6 border-end">
                <h3 className="fw-bold text-dark mb-0">18.5 LPA</h3>
                <p className="text-muted small mb-0 fw-medium">Highest Track</p>
              </div>
              <div className="col-6 ps-3">
                <h3 className="fw-bold text-success mb-0">6.2 LPA</h3>
                <p className="text-muted small mb-0 fw-medium">College Average</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE PLACEMENT CHARTS SUITE (Row-wrapped to prevent visual breaking) */}
      <div className="row g-4 mb-4">
        {/* Activity Status (Pie Chart) */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100 d-flex flex-column align-items-center justify-content-between bg-white">
            <div className="w-100 d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold text-secondary mb-0">Activity Status</h6>
              <select className="form-select form-select-sm w-auto fw-semibold" value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
                {departments.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="w-100 d-flex justify-content-center flex-grow-1 align-items-center" style={{ maxHeight: "240px" }}>
              <div style={{ maxWidth: "210px", width: "100%" }}><Pie data={pieChartData} /></div>
            </div>
          </div>
        </div>

        {/* Departmental Metrics (Bar Chart) */}
        <div className="col-12 col-lg-8">
          <div className="card border-0 rounded-4 shadow-sm p-4 h-100 bg-white">
            <h6 className="fw-bold text-secondary mb-3">Departmental Metrics (Eligible vs Placed)</h6>
            <div style={{ minHeight: "250px", position: "relative" }}><Bar data={departmentalComparisonData} options={{ responsive: true, maintainAspectRatio: false }} /></div>
          </div>
        </div>
      </div>

      {/* RECRUITMENT PIPELINE & YoY TRENDS (Structured Grid Layer) */}
      <div className="row g-4 mb-4">
        {/* Interactive Company Funnel */}
        <div className="col-12 col-lg-7">
          <div className="card border-0 rounded-4 shadow-sm p-4 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold text-secondary mb-0">Company-Wise Pipeline Funnel</h6>
              <small className="text-muted fw-medium text-end">💡 Click segments to drill down student list</small>
            </div>
            <div style={{ minHeight: "280px", position: "relative" }}>
              <Bar 
                ref={funnelChartRef} 
                data={funnelChartData} 
                options={{ 
                  responsive: true, 
                  maintainAspectRatio: false, 
                  onClick: handleFunnelClick,
                  scales: { x: { stacked: true }, y: { stacked: false } } 
                }} 
              />
            </div>
          </div>
        </div>

        {/* Salary Bracket Trends with YoY Toggle Switch */}
        <div className="col-12 col-lg-5">
          <div className="card border-0 rounded-4 shadow-sm p-4 bg-white h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold text-secondary mb-0">Salary Bracket Trends</h6>
              <div className="form-check form-switch m-0 d-flex align-items-center gap-2">
                <label className="form-check-label small fw-bold text-muted mb-0" htmlFor="yoyToggle" style={{ cursor: "pointer" }}>Compare YoY </label>
                <br />
                <input className="form-check-input" type="checkbox" id="yoyToggle" checked={isYoYEnabled} onChange={(e) => setIsYoYEnabled(e.target.checked)} style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className="flex-grow-1" style={{ minHeight: "240px", position: "relative" }}><Line data={salaryLineData} options={{ responsive: true, maintainAspectRatio: false }} /></div>
          </div>
        </div>
      </div>

      {/* Recruitment Funnel Click Manifest Section */}
      {drillDownInfo && (
        <div className="card border-0 rounded-4 shadow-sm p-4 mb-4 bg-primary-subtle border-start border-primary border-4 animate-fade-in">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="fw-bold text-primary mb-1">Recruitment Manifest: {drillDownInfo.company}</h5>
              <p className="text-muted small mb-0">Students tracked inside stage: <strong>{drillDownInfo.stage}</strong></p>
            </div>
            <button className="btn btn-sm btn-outline-primary rounded-pill px-3" onClick={() => setDrillDownInfo(null)}>Clear View</button>
          </div>
          <div className="table-responsive rounded-3 bg-white shadow-sm">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr><th>Student ID</th><th>Full Name</th><th>Department</th><th>Lifecycle Stage</th></tr>
              </thead>
              <tbody>
                {drillDownInfo.list.map((student, i) => (
                  <tr key={i}>
                    <td className="fw-bold text-dark">{student.id}</td>
                    <td>{student.name}</td>
                    <td><span className="badge bg-secondary-subtle text-secondary">{student.dept}</span></td>
                    <td><span className="badge bg-success-subtle text-success">{student.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Live Student Status Breakdown Matrix Table Grid */}
      <div className="card border-0 rounded-4 shadow-sm p-4">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
          <div>
            <h3 className="fs-4 fw-bold mb-1">Live Student Status Breakdown Matrix</h3>
            <p className="text-muted small mb-0">Operational control registry grid covering all departmental structural units.</p>
          </div>
          <input 
            type="text" 
            placeholder="Search departments..." 
            className="form-control form-control-sm rounded-3 w-auto" 
            style={{ minWidth: "220px" }}
            value={gridSearch}
            onChange={(e) => setGridSearch(e.target.value)}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 border-top">
            <thead className="table-light">
              <tr>
                <th>Department</th>
                <th>Total Strength</th>
                <th>Active</th>
                <th>Inactive</th>
                <th>Unverified Pending</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments
                .filter(dept => dept.toLowerCase().includes(gridSearch.toLowerCase()))
                .map((dept) => {
                  const data = departmentBufferData[dept];
                  const totalStrength = data.active + data.inactive + data.unverified;
                  return (
                    <tr key={dept}>
                      <td className="fw-bold text-dark fs-6">{dept}</td>
                      <td className="fw-semibold text-secondary">{totalStrength}</td>
                      <td><span className="badge bg-success-subtle text-success px-2 py-1 rounded">{data.active}</span></td>
                      <td><span className="badge bg-danger-subtle text-danger px-2 py-1 rounded">{data.inactive}</span></td>
                      <td>
                        <span 
                          className={`badge px-2 py-1 rounded ${data.unverified > 0 ? "bg-warning text-dark border border-warning shadow-sm" : "bg-light text-muted"}`}
                          style={{ cursor: data.unverified > 0 ? "pointer" : "default" }}
                          onClick={() => triggerVerificationModal(dept, data.unverified)}
                        >
                          {data.unverified} Pending {data.unverified > 0 && "⚠️"}
                        </span>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-sm btn-light border rounded-3 fw-medium" onClick={() => setSelectedDept(dept)}>Focus View</button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Global verification modal system overlays */}
      {modalDept && (
        <div className="modal show d-block bg-dark bg-opacity-50 align-items-center" tabIndex="-1" style={{ display: "flex" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg p-3">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-dark">Batch Audit: {modalDept} Verification</h5>
                <button type="button" className="btn-close" onClick={() => setModalDept(null)}></button>
              </div>
              <div className="modal-body py-3">
                <p className="mb-2">You are initializing verification parameters for <strong>{unverifiedCount} students</strong> within <strong>{modalDept}</strong>.</p>
                <p className="text-muted small mb-0">This will instantly verify profiles and activate placement registry parameters.</p>
              </div>
              <div className="modal-footer border-0 pt-0 gap-2">
                <button type="button" className="btn btn-light rounded-3 px-3" onClick={() => setModalDept(null)}>Cancel</button>
                <button type="button" className="btn btn-success rounded-3 px-4 fw-medium" onClick={() => { alert(`Success: Bulk verified ${unverifiedCount} students in ${modalDept}!`); setModalDept(null); }}>Bulk Verify Profiles</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;