import React from "react";
import Navbar from "../components/common/Navbar";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle, KeyRounded } from "@mui/icons-material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

const Login = () => {
  const inputStyle = {
    background: "radial-gradient(#424242 , #2b2b2b )",
    color: "white",
    "&::placeholder": {
      color: "white", // Placeholder color
    },
  };
  return (
    <div
      className="bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 14.jpg')`,
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className=" text-center font-poppin">
        <div className=" text-white mt-[12px] text-[50.33px] font-poppins">
          Welcome Back 👋
        </div>

        <p className="text-[#a4a4a4]">Login to the Ozirus Marketplace</p>
      </div>
      <div className="mx-[640px] text-[#A4A4A4] mt-[28px]">
        <div>
          <p className="text-[15px] font-poppins">Username</p>
          <TextField
            id="outlined-basic"
            placeholder="UserName"
            variant="outlined"
            sx={{ ...inputStyle }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: "white" }} />
                </InputAdornment>
              ),
              style: {
                color: "white",
                borderRadius: "4px",
                border: "1px solid #a4a4a4",
              },
            }}
          />
        </div>
        <div className="mt-[12px]">
          <p className="text-[15px] font-poppins">Password</p>
          <TextField
            id="outlined-basic"
            placeholder="Password"
            variant="outlined"
            sx={{ ...inputStyle }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRounded sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffRoundedIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              style: {
                color: "white",
                borderRadius: "4px",
                border: "1px solid #a4a4a4",
              },
            }}
          />
        </div>
        <p className="text-[14px] font-poppins mt-1 text-[#5C5C5C]">
          Forgot Password ?
        </p>
        <div
          className="text-[32px] text-black text-center mt-6 rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer"
          onClick={""}
        >
          <div className="flex items-center text-[16px] mx-[100px] py-[8px] font-poppins text-black text-center  ">
            <p className="text-center text-white ">Sign in</p>
          </div>
        </div>
        <div className="mt-10">
          <img src="/assets/continue with 1.png" alt="N/A" />
        </div>
        <ul className="flex justify-between mx-4  gap-[20px] mt-[15px]">
          <li className=" bg-gradient-to-r from-[#424242] to-[#2b2b2b] px-4 py-2 rounded-[10px] hover:cursor-pointer">
            <img src="/assets/7123025_logo_google_g_icon.png" alt="ds" />
          </li>
          <li className=" bg-gradient-to-r from-[#424242] to-[#2b2b2b] px-4 py-2 rounded-[10px] hover:cursor-pointer">
            <img src="/assets/104490_apple_icon.png" alt="ds" />
          </li>
          <li className=" bg-gradient-to-r from-[#424242] to-[#2b2b2b] px-4 py-2 rounded-[10px] hover:cursor-pointer">
            <img src="/assets/107175_circle_facebook_icon (1).png" alt="ds" />
          </li>
        </ul>
        <div className="mx text-center mt-5">
          <p> Don’t have an account? </p>
          <div className="mx-[75px] flex  gap-3">
            <p className="font-bold underline underline-offset-4 hover:cursor-pointer">
              Sign up{" "}
            </p>{" "}
            <p> here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
