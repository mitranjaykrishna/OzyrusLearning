import "./App.css";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
      <Profile />
    </div>
  );
}

export default App;
