import React from 'react'
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  return (
    <div className='registration'>
      <div className="container">

        <h2>Registration</h2>
        <div className="card">
          <form>

                <div class="col">
                    <div data-mdb-input-init class="form-outline">
                      <label class="form-label" for="form3Example1">
                        First name
                      </label>
                      <input type="text" id="form3Example1" class="form-control" />

                    </div>
                </div>
                <div class="col">
                    <div data-mdb-input-init class="form-outline">
                      <label class="form-label" for="form3Example2">
                        Last name
                      </label>
                      <input type="text" id="form3Example2" class="form-control" />
                     
                    </div>
                </div>

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

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example3">
                    Conform Password
                  </label>
                  <input type="password" id="form2Example3" className="form-control" />
                </div>

                 

              <Link to="/login-employer" className='btn btn-primary btn-block mb-4' role='button'>
                    Registration
              </Link>


          </form>
        </div>
      </div>

    </div>
  )
}

export default Registration