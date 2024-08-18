import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './employerLogin.css';

const employerLogin = () => {
  
  const navigate = useNavigate();
  const [input, setInput] = useState ({ 
    email: '',
    password: '',
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse (localStorage.getItem("user"));
    if (
      input.email === loggeduser.email 
      && input.password === loggeduser.password
    ) {
      localStorage.setItem ("loggedin", true)
      navigate('/employerDashboard');
    }else {
      alert('Invalid Email or Password');
    }
  }

  return (
        <div className="employerLogin">
           <div className="container">

              <h2>Login as Job Employer</h2>
              <div className="card">
                <form onSubmit={handleLogin}>
              {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" for="example1">
                        Email address
                      </label>
                      <input name='email' autoComplete='email' value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="email" id="example1" className="form-control" />
                    </div>

                    {/* Password input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" for="example2">
                        Password
                      </label>
                      <input name='password' autoComplete='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="password" id="example2" className="form-control" />
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