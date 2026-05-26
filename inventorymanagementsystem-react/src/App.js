import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute, AdminRoute } from "./service/GuardService";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}>

        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
