import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { getUsers } from "../../helper/localStorage";
import { useAuth } from "../../hoc/AuthProvider";

const employerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to find the employer by email
  const findEmployer = () => {
    return getUsers()
      .filter((user) => user.role === "employer")
      .find((user) => user?.email === formData?.email);
  };

  // Function to validate the form data
  const validateForm = () => {
    // Object to store validation errors
    const newErrors = {};
    const employer = findEmployer();

    // Check if the email exists among the users
    if (!employer) {
      newErrors.email = "Invalid email";
    } else if (employer.password !== formData?.password) {
      newErrors.password = "Invalid password";
    }

    // Return the object containing all validation errors
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the form and store any validation errors
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set the errors if there are validation issues
      return; // Stop further execution if there are errors
    }

    setErrors({});

    const employer = findEmployer();
    login(employer);
    alert("Successfully signin");
    navigate("/employer-dashboard");
  };

  return (
    <div className="employerLogin">
      <div className="container">
        <h2>Login as Job Employer</h2>
        <div className="card">
          <form onSubmit={handleLogin}>
            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                type="email"
                id="email"
                className={`form-control ${errors.email && "border-danger"}`}
                required
              />
              {errors.email && <div className="error mt-1 text-bold fw-bold text-danger">{errors.email}</div>}
            </div>

            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                type="password"
                id="password"
                className={`form-control ${errors.password && "border-danger"}`}
                required
              />
              {errors.password && <div className="error mt-1 text-bold fw-bold text-danger">{errors.password}</div>}
            </div>

            {/* Submit button */}

            <button className="btn btn-primary btn-block" role="button" type="submit">
              Sign in
            </button>

            {/* Register buttons */}
            <div className="text-center">
              <p>
                Don't have an account?
                <Link to="/register" className="btn btn-Link" role="button" style={{ color: "#007bff" }}>
                  Register
                </Link>
              </p>
            </div>

            <Link to="/" className="btn btn-primary btn-block" role="button">
              Login as Job Seeker
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default employerLogin;
