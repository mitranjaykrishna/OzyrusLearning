import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
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
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
