import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute, AdminRoute } from "./service/GuardService";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        
         {/* ADMIN ROUTES */}
        <Route path="/category" element={<AdminRoute element={<CategoryPage/>}/>}></Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
