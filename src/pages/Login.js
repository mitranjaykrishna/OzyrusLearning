import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle, KeyRounded } from "@mui/icons-material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
const Login = () => {
  const inputStyle = {
    background: "radial-gradient(#424242 , #2b2b2b )",
    color: "white",
    width: "100%",
    "&::placeholder": {
      color: "white", // Placeholder color
    },
  };
  return (
    <div
      className="bg-cover bg-center  text-white min-h-screen px-5 lg:px-0   "
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 14.jpg')`,
      }}
    >
      <div className="flex  justify-center items-center pt-[6rem] ">
        <div className="flex flex-col gap-5">
          <div className=" text-center font-poppin">
            <div className=" text-white  text-[50.33px] font-poppins">
              Welcome Back 👋
            </div>

            <p className="text-[#a4a4a4]">Login to the Ozirus Marketplace</p>
          </div>
          <div className="text-[#A4A4A4] flex flex-col w-full gap-2 ">
            <div className="w-full">
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
            <div>
              <p className="text-[14px] font-poppins mt-1 text-[#5C5C5C]">
                Forgot Password ?
              </p>
            </div>

            <div
              className="text-[32px] text-black text-center mt-6 rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer"
              // onClick={"/"}
            >
              <div className="flex justify-center items-center text-[16px]  py-[10px] font-poppins text-black text-center  ">
                <p className="text-center text-white ">Sign in</p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center   ">
              {/* <img src="/assets/continue with 1.png" alt="N/A" /> */}
              <div
                className="w-[7rem] h-[1px] rounded-sm "
                style={{
                  background: "linear-gradient(to right, #606060, #FFFFFF)",
                }}
              ></div>
              <div>
                <p>Or Continue With</p>
              </div>
              <div
                className="w-[7rem] h-[1px] rounded-sm  "
                style={{
                  background: "linear-gradient(to right, #FFFFFF, #606060)",
                }}
              ></div>
            </div>
            <div className="flex justify-center   gap-[20px]    ">
              <div className=" bg-gradient-to-r from-[#424242] to-[#2b2b2b] px-4 py-2 rounded-[10px]  hover:cursor-pointer ">
                <img
                  src="/assets/7123025_logo_google_g_icon.png"
                  alt="ds"
                  className=" object-cover w-8 "
                />
              </div>
              <div className=" bg-gradient-to-r from-[#424242] to-[#2b2b2b] px-4 py-2 rounded-[10px] hover:cursor-pointer ">
                <img
                  src="/assets/104490_apple_icon.png"
                  alt="ds"
                  className=" object-cover w-8   "
                />
              </div>
              <div className=" bg-gradient-to-r from-[rgb(66,66,66)] to-[#2b2b2b] px-4 py-2 rounded-[10px] hover:cursor-pointer ">
                <img
                  src="/assets/107175_circle_facebook_icon (1).png"
                  alt="ds"
                  className=" object-cover w-8   "
                />
              </div>
            </div>
            <div className="mx text-center mt-5">
              <p> Don’t have an account? </p>
              <div className="flex flex-col justify-center  gap-3">
                <p className="  ">
                  <span className="font-bold underline underline-offset-4 hover:cursor-pointer">
                    Sign up
                  </span>
                  {"  "}
                  here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
