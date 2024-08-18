// import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ProtectedRoute from "./hoc/ProtectedRoute";

// import SeekerLogin from "./pages/SeekerLogin/SeekerLogin";
// import Registration from "./pages/RegistrationForm/RegistrationForm";
// import Home from "./pages/Home/Home";
// import EmployerDashboard from "./pages/EmployerDashboard/EmployerDashboard";
// import EmployerLogin from "./pages/EmployerLogin/employerLogin";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* App Routes */}
//       <Routes>
//         {/* Unprotected Routes */}
//         <Route path="login-employer" element={<EmployerLogin/>} />
//         <Route path="/" element={<SeekerLogin />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path='/home-page' element={<Home/>} />
//         {/* Protected Routes */}
//         <Route path="/employer-dashboard" element={<ProtectedRoute element={EmployerDashboard} role="employer" />} />
//         <Route path="/home-seeker" element={<ProtectedRoute element={Home} role="seeker" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./hoc/ProtectedRoute";

import SeekerLogin from "./pages/SeekerLogin/SeekerLogin";
import Registration from "./pages/RegistrationForm/RegistrationForm";
import Home from "./pages/Home/Home";
import EmployerDashboard from "./pages/EmployerDashboard/EmployerDashboard";
import EmployerLogin from "./pages/EmployerLogin/employerLogin";


function App() {
  return (
    <BrowserRouter>
      {/* App Routes */}
      <Routes>
        {/* Unprotected Routes */}
        <Route path="login-employer" element={<EmployerLogin />} />
        <Route path="/" element={<SeekerLogin />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home-page" element={<Home />} />
        {/* Protected Routes */}
        <Route
          path="/employer-dashboard"
          element={
            <ProtectedRoute role="employer">
              <EmployerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home-seeker"
          element={
            <ProtectedRoute role="seeker">
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
