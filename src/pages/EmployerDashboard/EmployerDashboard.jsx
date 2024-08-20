import React, { useState } from "react";

import { addJob, getJobs } from "../../helper/localStorage"; // Import helper functions for interacting with local storage
import { useAuth } from "../../hoc/AuthProvider"; // Import custom hook to manage authentication

function EmployerDashboard() {
  // State hooks
  const [modalData, setModalData] = useState({}); // State for holding form data to add or edit a job
  const [jobs, setJobs] = useState(getJobs() ? getJobs() : []); // State to hold the list of jobs, initialized from local storage
  const [editIndex, setEditIndex] = useState(undefined); // State to track the index of the job being edited
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category for filtering jobs

  const { user, logout } = useAuth(); // Destructure user and logout function from authentication context

  // Handle category filter change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter jobs based on selected category
  const filteredJobs = jobs.filter((job) => selectedCategory === "" || job.category === selectedCategory);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for adding or updating a job
  const handleSubmit = (e) => {
    e.preventDefault();

    let jobData;
    if (editIndex > -1) {
      // If editing an existing job, update the corresponding job in the list
      jobData = jobs.map((item, i) => (i === editIndex ? { ...item, ...modalData, userId: user.userId } : item));
      addJob(jobData, true); // Update jobs in local storage
    } else {
      // If adding a new job, create new job data
      jobData = { ...modalData, userId: user.userId };
      addJob(jobData); // Add new job to local storage
    }
    setJobs(getJobs()); // Refresh the list of jobs from local storage
    setModalData({}); // Reset modal data
    const modalClose = document.querySelector('[data-bs-dismiss="modal"]'); // Close the modal
    if (modalClose) {
      modalClose.click();
    }
    setEditIndex(undefined); // Reset edit index
  };

  // Handle editing a job
  const handleEdit = (index) => {
    const findClickedJob = jobs.find((_, i) => i == index); // Find the job to be edited
    setModalData(findClickedJob); // Set the form data with the selected job details
    setEditIndex(index); // Set the index for the job being edited
  };

  // Handle deleting a job
  const handleDelete = (index) => {
    const filteredJobs = jobs.filter((_, i) => index != i); // Remove the selected job from the list
    setJobs(filteredJobs); // Update the jobs state
    localStorage.setItem("jobs", JSON.stringify(filteredJobs)); // Save the updated jobs list to local storage
  };

  // Handle canceling the modal form
  const cancelModal = () => {
    setModalData({}); // Reset modal data
    setEditIndex(undefined); // Reset edit index
  };

  // Component for rendering each job in the table
  const TableList = ({ data, index }) => {
    return (
      <tr>
        <td className="align-middle">{data?.title}</td>
        <td className="align-middle">{data?.category}</td>
        <td className="align-middle">{data?.location}</td>
        <td className="align-middle">{data?.salary}</td>
        <td className="align-middle">
          <button className="btn btn-danger me-2" onClick={() => handleDelete(index)}>
            <i className="bi bi-trash-fill" />
          </button>
          <button className="btn btn-primary" onClick={() => handleEdit(index)} data-bs-toggle="modal" data-bs-target="#employerModal">
            <i className="bi bi-pencil-square" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row my-3">
              <div className="col-12 col-sm-6 text-bold">
                <h2>
                  <strong>Employer Dashboard</strong>
                </h2>
              </div>
              <div className="col-12 col-sm-6 d-flex gap-2 justify-content-sm-end">
                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#employerModal">
                  <i className="bi bi-plus-circle-fill me-2"></i>
                  <span>Add New Employee</span>
                </button>
                <button className="btn bg-warning" onClick={() => logout()}>
                  <span>Log out</span>
                </button>
              </div>
            </div>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          {jobs.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{filteredJobs.length ? filteredJobs.map((item, i) => <TableList data={item} key={i} index={i} />) : null}</tbody>
            </table>
          ) : (
            <h3 className="text-center">No Data Found</h3>
          )}
        </div>
      </div>
      {/* Modal Start */}
      <form onSubmit={handleSubmit}>
        <div className="modal fade" data-bs-backdrop="static" tabIndex="-1" id="employerModal">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Post Job </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cancelModal}></button>
              </div>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    placeholder="Job Title"
                    required
                    name="title"
                    value={modalData?.title || ""}
                    onChange={handleChange}
                  />
                  <label htmlFor="jobTitle">Job Title</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="jobDesc"
                    placeholder="Job Description"
                    style={{ height: "100px" }}
                    required
                    value={modalData?.description || ""}
                    name="description"
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="jobDesc">Job Description</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    className="form-control mb-3"
                    id="category"
                    name="category"
                    value={modalData?.category || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Job Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                  <label htmlFor="category">Job Category</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="jobSalary"
                    placeholder="Job Salary"
                    required
                    value={modalData?.salary || ""}
                    name="salary"
                    onChange={handleChange}
                  />
                  <label htmlFor="jobSalary">Job Salary</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="jobLocation"
                    placeholder="Job Location"
                    required
                    value={modalData?.location || ""}
                    name="location"
                    onChange={handleChange}
                  />
                  <label htmlFor="jobLocation">Job Location</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="jobReq"
                    placeholder="Job Requirement"
                    style={{ height: "100px" }}
                    required
                    value={modalData?.requirement || ""}
                    name="requirement"
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="jobReq">Job Requirement</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editIndex >= -1 ? "Update" : "Post"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmployerDashboard;
