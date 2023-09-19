import { useState } from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <div
      className="bg-cover bg-center  text-white min-h-screen px-5 lg:px-0  overflow-hidden "
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 14.jpg')`,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/Profile"
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/Home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
          />
          <Route path="/SignUp" element={<SignUp setAuth={setAuth} />} />
          <Route path="/" element={<Login setAuth={setAuth} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
