import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; 

const SeekerDashboard = () => {
  return (
    <div>
      <header className="bg-success text-white text-center py-4">
        <h1>Job Search Portal</h1>
      </header>

      <section className="container my-5">
        <div className="search text-center">
          <h2 className="mb-4">Find Your Dream Job</h2>
          <form action="#" method="get">
            <div className="form-row justify-content-center">
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="keywords"
                  placeholder="Keywords"
                />
              </div>
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Location"
                />
              </div>
              <div className="col-md-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  placeholder="Company"
                />
              </div>
              <div className="col-md-2 mb-2">
                <button type="submit" className="btn btn-primary btn-block">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="container">
        <div className="job-listings">
          <h2 className="text-center mb-4">Latest Job Listings</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">Web Developer</h3>
                  <p className="card-text">Company: GfG</p>
                  <p className="card-text">Location: India</p>
                  <p className="card-text">Description: Good Web Developer</p>
                  <a href="#" className="btn btn-success btn-sm">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">Graphic Designer</h3>
                  <p className="card-text">Company: Geeksforgeeks</p>
                  <p className="card-text">Location: India</p>
                  <p className="card-text">
                    Description: Good Graphic Designer
                  </p>
                  <a href="#" className="btn btn-success btn-sm">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">Web Developer</h3>
                  <p className="card-text">Company: GfG</p>
                  <p className="card-text">Location: India</p>
                  <p className="card-text">Description: Good Web Developer</p>
                  <a href="#" className="btn btn-success btn-sm">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="card-title">Web Developer</h3>
                  <p className="card-text">Company: GfG</p>
                  <p className="card-text">Location: India</p>
                  <p className="card-text">Description: Good Web Developer</p>
                  <a href="#" className="btn btn-success btn-sm">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p>© 2023 Job Search Portal</p>
      </footer>
    </div>
  );
};

export default SeekerDashboard;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

// const JobSearchPortal = () => {
//   const [searchKeywords, setSearchKeywords] = useState("");
//   const [searchLocation, setSearchLocation] = useState("");
//   const [searchCompany, setSearchCompany] = useState("");
//   const [filteredJobs, setFilteredJobs] = useState(jobListings);

//   const jobListings = [
//     {
//       title: "Web Developer",
//       company: "GfG",
//       location: "India",
//       description: "Good Web Developer",
//     },
//     {
//       title: "Graphic Designer",
//       company: "Geeksforgeeks",
//       location: "India",
//       description: "Good Graphic Designer",
//     },
//     // Add more jobs as needed
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();

//     const filtered = jobListings.filter(
//       (job) =>
//         job.company.toLowerCase().includes(searchCompany.toLowerCase()) &&
//         job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
//         job.title.toLowerCase().includes(searchKeywords.toLowerCase())
//     );

//     setFilteredJobs(filtered);
//   };

//   return (
//     <div>
//       <header className="bg-success text-white text-center py-4">
//         <h1>Job Search Portal</h1>
//       </header>

//       <nav className="bg-secondary py-2">
//         <ul className="nav justify-content-center">
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white">
//               Jobs
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white">
//               Companies
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white">
//               About Us
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link text-white">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </nav>

//       <section className="container my-5">
//         <div className="search text-center">
//           <h2 className="mb-4">Find Your Dream Job</h2>
//           <form onSubmit={handleSearch}>
//             <div className="form-row justify-content-center">
//               <div className="col-md-3 mb-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="keywords"
//                   placeholder="Keywords"
//                   value={searchKeywords}
//                   onChange={(e) => setSearchKeywords(e.target.value)}
//                 />
//               </div>
//               <div className="col-md-3 mb-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="location"
//                   placeholder="Location"
//                   value={searchLocation}
//                   onChange={(e) => setSearchLocation(e.target.value)}
//                 />
//               </div>
//               <div className="col-md-3 mb-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="company"
//                   placeholder="Company"
//                   value={searchCompany}
//                   onChange={(e) => setSearchCompany(e.target.value)}
//                 />
//               </div>
//               <div className="col-md-2 mb-2">
//                 <button type="submit" className="btn btn-primary btn-block">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

//       <section className="container">
//         <div className="job-listings">
//           <h2 className="text-center mb-4">Latest Job Listings</h2>
//           <div className="row">
//             {filteredJobs.length > 0 ? (
//               filteredJobs.map((job, index) => (
//                 <div className="col-md-6" key={index}>
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h3 className="card-title">{job.title}</h3>
//                       <p className="card-text">Company: {job.company}</p>
//                       <p className="card-text">Location: {job.location}</p>
//                       <p className="card-text">Description: {job.description}</p>
//                       <a href="#" className="btn btn-success btn-sm">
//                         Apply Now
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">No jobs found matching your criteria.</p>
//             )}
//           </div>
//         </div>
//       </section>

//       <footer className="bg-dark text-white text-center py-3">
//         <p>© 2023 Job Search Portal</p>
//       </footer>
//     </div>
//   );
// };

// export default JobSearchPortal;
