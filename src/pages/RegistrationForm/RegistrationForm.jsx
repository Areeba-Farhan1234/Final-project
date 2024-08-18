import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { addUser, getUsers } from "../../helper/localStorage";

function generateUserId(length = 32) {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  return (timestamp + randomString).substring(0, length);
}

const RegistrationForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    userId: generateUserId(),
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Navigation hook to redirect users
  const navigate = useNavigate();

  // Function to validate the form data
  const validateForm = () => {
    // Object to store validation errors
    const newErrors = {};

    // Validate full name - must be at least 6 characters
    if (formData.name.length < 6) {
      newErrors.name = "Full name must be at least 6 characters";
    }

    // Validate email using regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate password - must be at least 6 characters
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Validate that passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check if the email already exists among the users
    getUsers().forEach((user) => {
      if (user?.email === formData.email) {
        newErrors.email = "Email already exists";
      }
    });

    // Return the object containing all validation errors
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the form and store any validation errors
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set the errors if there are validation issues
      return; // Stop further execution if there are errors
    }

    setErrors({}); // Clear errors if the form is valid

    // Destructure formData to remove confirmPassword and prepare new user data
    const { confirmPassword, ...newFormData } = formData;

    // Add the new user to the system or database
    addUser(newFormData);

    // Redirect to home page or another route after successful registration
    navigate(`${formData?.role == "seeker" ? "/" : "/login-employer"}`);

    alert("User created succesfully");
  };

  return (
    <div className="registration">
      <div className="container">
        <h2>Registration Page</h2>
        <div className="card">
          <form onSubmit={handleSubmit}>
            {/* Full Name input */}
            <div className="col">
              <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  autoComplete="name"
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  type="text"
                  id="fullName"
                  className="form-control"
                  required
                />
                {errors.name && <div className="error mt-1 text-bold fw-bold text-danger">{errors.name}</div>}
              </div>
            </div>

            {/* Dropdown */}
            <div className="form-group mb-4">
              <label htmlFor="dropdown" className="form-label">
                Type
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                id="dropdown"
                className={`form-control`}
                required
              >
                <option value="">Select a role</option>
                <option value="seeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
              {errors.role && <div className="invalid-feedback">{errors.role}</div>}
            </div>

            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="emailField">
                Email address
              </label>
              <input
                name="email"
                value={formData.email}
                autoComplete="email"
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value.toLowerCase().trim() })}
                type="email"
                id="emailField"
                className="form-control"
                required
              />
              {errors.email && <div className="error mt-1 text-bold fw-bold text-danger">{errors.email}</div>}
            </div>

            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="passField">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                autoComplete="password"
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                type="password"
                id="passField"
                className={`form-control ${errors.password && "border-danger"}`}
                required
              />
              {errors.password && <div className="error mt-1 text-bold fw-bold text-danger">{errors.password}</div>}
            </div>

            {/* Confirm Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                value={formData.confirmPassword}
                autoComplete="conformPassword"
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                type="password"
                id="confirmPassword"
                className={`form-control ${errors.confirmPassword && "border-danger"}`}
                required
              />
              {errors.confirmPassword && <div className="error mt-1 text-bold fw-bold text-danger">{errors.confirmPassword}</div>}
            </div>

            {/* Submit button */}
            {/* <button className="btn btn-primary btn-block" role="button" type="submit">
              Register
            </button> */}
            
            <Link to="/login-employer" className='btn btn-primary btn-block mb-4' role='button' type='submit'>
                    Registration
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
