// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import "bootstrap-icons/font/bootstrap-icons.css";
// import App from "./App.jsx";
// import { AuthProvider } from "./hoc/AuthProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </StrictMode>
// );

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import Bootstrap Icons CSS if needed
import "bootstrap-icons/font/bootstrap-icons.css";
// Import your main App component
import App from "./App.jsx";
// Import AuthProvider if you're using authentication context
import { AuthProvider } from "./hoc/AuthProvider.jsx";

// Create a root for rendering the React app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the application wrapped in AuthProvider for context
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
