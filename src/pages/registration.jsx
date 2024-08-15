import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {

  const [input, setInput] = useState ({
    name: '',
    email: '',
    password: '',
  })

  //to store value in local storage

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem ("user", JSON.stringify(input))
    Navigate("/login-employer")
  }


  return (
    <div className='registration'>
      <div className="container">

        <h2>Registration</h2>
        <div className="card">

          <form onSubmit={handleSubmit}>

                <div className="col">
                    <div data-mdb-input-init class="form-outline">
                      <label className="form-label" for="examplea">
                        First name
                      </label>
                      <input name='name' value={input.name} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="text" id="examplea" className="form-control" />

                    </div>
                </div>
                <div className="col">
                    <div data-mdb-input-init class="form-outline">
                      <label className="form-label" for="exampleb">
                        Last name
                      </label>
                      <input name='name' value={input.name} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) } type="text" id="exampleb" className="form-control" />
                     
                    </div>
                </div>

                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" For="exampl1">
                    Email address
                  </label>
                  <input name='email' value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) }  type="email" id="example1" className="form-control" />
                </div>

                {/* Password input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" For="example2">
                    Password
                  </label>
                  <input name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) }  type="password" id="example2" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" For="example2">
                    Conform Password
                  </label>
                  <input name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value,}) }  type="password" id="example2" className="form-control" />
                </div>

                 

              <Link to="/login-employer" className='btn btn-primary btn-block mb-4' role='button' type='submit'>
                    Registration
              </Link>


          </form>
        </div>
      </div>

    </div>
  )
}

export default Registration