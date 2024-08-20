import React, { useState } from "react";
import "./styles.css";

import { getJobs } from "../../helper/localStorage";
import { useAuth } from "../../hoc/AuthProvider";

const SeekerDashboard = () => {
  const [jobs, setJobs] = useState(getJobs() ? getJobs() : []);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchKeywords, setSearchKeywords] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const { logout } = useAuth();

  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
        job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        (job.description.toLowerCase().includes(searchKeywords.toLowerCase()) || job.requirement.toLowerCase().includes(searchKeywords.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
      <header className="bg-primary text-white py-2" style={{ position: "relative" }}>
        <h1 className="my-0 text-start text-sm-center ms-2 ms-sm-0">
          <strong>Job Search Portal</strong>
        </h1>
        <button
          className="btn bg-warning"
          onClick={() => logout()}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
          }}
        >
          <span>Log out</span>
        </button>
      </header>

      <section className="container my-5">
        <div className="search mt-1" data-aos="fade-right">
          <h2 className="mb-4 text-center h1 text-primary">Find Your Dream Job</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-3 mb-lg-4">
              <div className="form-outline">
                <label className="form-label" htmlFor="titleField">
                  <strong>Search by title:</strong>
                </label>
                <input id="titleField" className="form-control" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4 mb-md-3 mb-lg-4">
              <div className="form-outline">
                <label className="form-label" htmlFor="locationField">
                  <strong>Search by location:</strong>
                </label>
                <input id="locationField" className="form-control" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
              </div>
            </div>
            <div className="col-12 col-md-12 mb-4 mb-md-2 mb-lg-3">
              <div className="form-outline">
                <label className="form-label" htmlFor="keywordField">
                  <strong>Search by keywords:</strong>
                </label>
                <input id="keywordField" className="form-control" value={searchKeywords} onChange={(e) => setSearchKeywords(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-4 d-flex align-items-end">
              <button className="btn btn-primary w-100" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h3 className="mb-4 h3 text-primary" data-aos="flip-right">
          <strong>Latest Jobs</strong>
        </h3>
        <div className="row">
          {filteredJobs.length ? (
            filteredJobs.map((item, i) => <JobCard data={{ ...item, id: i }} key={i} setJobs={setFilteredJobs} />)
          ) : (
            <h4>No jobs found</h4>
          )}
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3 mt-2">
        <p className="my-0">© 2024 Job Search Portal</p>
      </footer>
    </div>
  );
};

export default SeekerDashboard;

const JobCard = ({ data, setJobs }) => {
  const onApplyClick = () => {
    setJobs((prevJobs) => prevJobs.map((item, i) => (data?.id === i ? { ...item, applied: true } : item)));
  };

  return (
    <div className="col-md-6" data-aos="fade-right">
      <div className="card mb-4">
        <div className="card-body">
          <h3>
            <strong>{data?.title}</strong>
          </h3>
          <p>
            <strong>Description: </strong>
            <br />
            {data?.description}
          </p>
          <p>
            <strong>Category:</strong> {data?.category}
          </p>
          <p>
            <strong>Location: </strong> {data?.location}
          </p>
          <p>
            <strong>Salary: </strong> {data?.salary}rs
          </p>
          <button className={`btn btn-${data?.applied ? "secondary" : "info"}`} onClick={onApplyClick} disabled={data?.applied}>
            {data?.applied ? "Applied" : "Apply now"}
          </button>
        </div>
      </div>
    </div>
  );
};
