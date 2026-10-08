import React from "react";
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";

import CommonLoginScreen from "./Components/CommonLoginScreen";
import ForgotPassword from "./Components/ForgotPassword";
import PlacementReaset from "./Components/PlacementReset"
import ResetPassword from "./Components/ResetPassword";
import SuccessfulPage from "./Components/SuccessfulPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route
          path="/"
          element={<CommonLoginScreen/>}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword/>}
        />

        <Route
          path="/placement-reset"
          element={<PlacementReaset/>}
        />
      
         <Route
          path="/reset-password"
          element={<ResetPassword />}
        />
         <Route
          path="/password-success"
          element={<SuccessfulPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;