import React from 'react';
import './SeekerLogin.css';


const seekerLogin = () => {
  return (
        <div className="seekerLogin">

          <div className="container">

          <h2>Login as Job Seeker</h2>
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
                  <div className="col d-flex justify-content-center">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                      <label className="form-check-label" htmlFor="form2Example31">
                        Remember me
                      </label>
                    </div>
                  </div>

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
                    Don't have an account? <a href="#!">Register</a>
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

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Login as Employer
                </button>
            </form>
            </div>
          </div>

        </div>
  );
};

export default seekerLogin;
