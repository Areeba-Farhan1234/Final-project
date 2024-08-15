import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './seekerLogin.css';


const seekerLogin = () => {

  const [input, setInput] = useState ({
    email: '',
    password: '',
  })


  return (
        <div className="seekerLogin">

          <div className="container">

          <h2>Login as Job Seeker</h2>
            <div className="card">
            <form>
          {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="example1">
                    Email address
                  </label>
                  <input name='email' value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="email" id="example1" className="form-control" />
                </div>

                {/* Password input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="example2">
                    Password
                  </label>
                  <input name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="password" id="example2" className="form-control" />
                </div>

                {/* 2 column grid layout for inline styling */}
                <div className="row mb-4">
                

                  <div className="col">
                    {/* Simple link */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* Submit button */}

                <Link to="/home-page" className='btn btn-primary btn-block mb-4' role='button' >
                         Sign in 
                </Link>
                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Don't have an account? 
                    <Link to="/register" className='btn btn-Link' role='button' style={{color: "#007bff"}} >
                          Register
                    </Link>
                  </p>
                </div>

               <Link to="/login-employer" className='btn btn-primary btn-block mb-4' role='button'>
                    Login as Employer
               </Link>
            </form>
            </div>
          </div>

        </div>
  );
};

export default seekerLogin;
