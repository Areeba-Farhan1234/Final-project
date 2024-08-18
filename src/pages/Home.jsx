import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <h2>Employee Details</h2>
        <div className="button">
          <button className="btn btn-danger m-4"><i className="fa-solid fa-trash">&nbsp;</i>Delete</button> 
          <button className="btn btn-primary"><i className="fa-solid fa-plus"></i>Add</button>
        </div>
      </div>
      <i className="bi bi-trash3-fill"></i>

      <table className="table table-striped table-centered mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-user">

              Faiza Khan
            </td>
            <td>faiza@gmail.com</td>
            <td>03874959268</td>
            <td className="table-action">
              <a href="#edit" className="action-icon"><i class="fa-solid fa-pencil"></i> </a>
              <a href="#delete" className="action-icon"><i className="fa-solid fa-trash"></i> </a>
            </td>
          </tr>
          <tr>
            <td className="table-user">
              Arshad
            </td>
            <td>arshadali@gmail.com</td>
            <td>03911264785</td>
            <td className="table-action">
            <a href="#edit" className="action-icon"><i class="fa-solid fa-pencil"></i> </a>
            <a href="#delete" className="action-icon"><i className="fa-solid fa-trash"></i> </a>
            </td>
          </tr>
          <tr>
            <td className="table-user">
              {/* Uncomment and replace with actual image source */}
              {/* <img src="path/to/avatar-4.jpg" alt="table-user" className="me-2 rounded-circle" /> */}
              Zoya Faisal
            </td>
            <td>zoya@gmail.com</td>
            <td>03116749773</td>
            <td className="table-action">
            <a href="#edit" className="action-icon"><i class="fa-solid fa-pencil"></i> </a>
            <a href="#delete" className="action-icon"><i className="fa-solid fa-trash"></i> </a>
            </td>
          </tr>
          <tr>
            <td className="table-user">
              {/* Uncomment and replace with actual image source */}
              {/* <img src="path/to/avatar-5.jpg" alt="table-user" className="me-2 rounded-circle" /> */}
              Sania Khan
            </td>
            <td>saniakhan@gmail.com</td>
            <td>03113495773</td>
            <td className="table-action">
            <a href="#edit" className="action-icon"><i class="fa-solid fa-pencil"></i> </a>
            <a href="#delete" className="action-icon"><i className="fa-solid fa-trash"></i> </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
