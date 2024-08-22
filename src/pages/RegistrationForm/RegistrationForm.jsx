import "./styles.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addUser, getUsers } from "../../helper/localStorage";

function generateUserId(length = 32) {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  return (timestamp + randomString).substring(0, length);
}

const RegistrationForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    userId: generateUserId(),
  });

  
  const [errors, setErrors] = useState({});

 
  const navigate = useNavigate();

  
  const validateForm = () => {
   
    const newErrors = {};

    
    if (formData.name.length < 6) {
      newErrors.name = "Full name must be at least 6 characters";
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

   
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    
    getUsers().forEach((user) => {
      if (user?.email === formData.email) {
        newErrors.email = "Email already exists";
      }
    });

    
    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return; 
    }

    setErrors({}); 
   
    const { confirmPassword, ...newFormData } = formData;

   
    addUser(newFormData);

    
    navigate(`${formData?.role == "seeker" ? "/" : "/login-employer"}`);

    alert("User created succesfully");
  };

  return (
    <div className="registration" data-aos="zoom-in">
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
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                type="password"
                id="confirmPassword"
                className={`form-control ${errors.confirmPassword && "border-danger"}`}
                required
              />
              {errors.confirmPassword && <div className="error mt-1 text-bold fw-bold text-danger">{errors.confirmPassword}</div>}
            </div>

            {/* Submit button */}
            <button className="btn btn-primary btn-block" role="button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
