import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div
      className="bg-cover bg-center  text-white min-h-screen px-5 lg:px-0   "
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 14.jpg')`,
      }}
    >
      <Navbar />
      {/* <Login /> */}
      {/* <Profile /> */}
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
