import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { getUsers } from "../../helper/localStorage";
import { useAuth } from "../../hoc/AuthProvider";

const SeekerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to find the job seeker by email
  const findSeeker = () => {
    return getUsers()
      .filter((user) => user.role === "seeker")
      .find((user) => user?.email === formData?.email);
  };

  // Function to validate the form data
  const validateForm = () => {
    // Object to store validation errors
    const newErrors = {};
    const seeker = findSeeker();

    // Check if the email exists among the users
    if (!seeker) {
      newErrors.email = "Invalid email";
    } else if (seeker.password !== formData?.password) {
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

    const seeker = findSeeker();
    login(seeker);
    alert("Successfully signin");
    navigate("/home-seeker");
  };

  return (
    <div className="seekerLogin">
      <div className="container">
        <h2>Login as Job Seeker</h2>
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

            <Link to="/home-page" className='btn btn-primary btn-block mb-4' role='button' >
                         Sign in 
            </Link>

            {/* Register buttons */}
            <div className="text-center">
              <p>
                Don't have an account?
                <Link to="/register" className="btn btn-Link" role="button" style={{ color: "#007bff" }}>
                  Register
                </Link>
              </p>
            </div>

            <Link to="/login-employer" className="btn btn-primary btn-block" role="button">
              Login as Employer
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeekerLogin;
