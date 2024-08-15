import React from 'react'
import { Link } from 'react-router-dom';
import './employerLogin.css';

const employerLogin = () => {
  return (
        <div className="employerLogin">
           <div className="container">

              <h2>Login as Job Employer</h2>
              <div className="card">
                <form>
              {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input type="email" id="form2Example1" className="form-control" />
                    </div>

                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input type="password" id="form2Example2" className="form-control" />
                    </div>

                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                    

                      <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign in
                    </button>

                    {/* Register buttons */}
                    <div className="text-center">
                      <p>
                        Don't have an account? 
                        <Link to="/register" className='btn btn-Link' role='button' style={{color: "#007bff"}} >
                          Register
                        </Link>
                      </p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>

                    <Link to="/" className='btn btn-primary btn-block mb-4' role='button'>
                    Login as Seeker
                   </Link>
                </form>
              </div>
          </div>
        </div>
  )
}

export default employerLogin