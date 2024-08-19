import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import { AuthProvider } from "./hoc/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
