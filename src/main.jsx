import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./contexts/AuthContext.jsx";

import "./init";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalCredentials = {
  "client-id": "sandbox-abcdefghijklm1234567890",
  // Add any other optional PayPal settings here if needed
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
