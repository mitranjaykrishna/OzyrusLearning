import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle, KeyRounded } from "@mui/icons-material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
const SignUp = () => {
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
      <div className=" text-white  text-[50.33px] font-poppins pt-[6rem] flex justify-center">
        Welcome to the Ozirus Marketplace 👋
      </div>
      <div className="flex  justify-center items-center ">
        <div className="flex flex-col gap-5">
          <div className=" text-center font-poppin">
            <p className="text-[#a4a4a4]">
              Signup to access assets and creators!
            </p>
          </div>
          <div className="text-[#A4A4A4] flex flex-col gap-2 justify-center ">
            <div className="flex justify-between gap-2">
              <div className="w-full">
                <p className="text-[15px] font-poppins">Firstname</p>
                <TextField
                  id="outlined-basic"
                  placeholder="First Name"
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
              <div className="w-full">
                <p className="text-[15px] font-poppins">Lastname</p>
                <TextField
                  id="outlined-basic"
                  placeholder="Last Name"
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
            </div>

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
                  endAdornment: (
                    <InputAdornment position="start">
                      <KeyRounded sx={{ color: "white" }} />
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
              <p className="text-[15px] font-poppins">Enter Password Again</p>
              <TextField
                id="outlined-basic"
                placeholder="Password"
                variant="outlined"
                sx={{ ...inputStyle }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <KeyRounded sx={{ color: "white" }} />
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
            <div
              className="text-[32px] text-black text-center mt-6 rounded-[20px] bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer"
              // onClick={"/"}
            >
              <div className="flex justify-center items-center text-[16px]  py-[10px] font-poppins text-black text-center  ">
                <p className="text-center text-white ">Sign Up</p>
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
              <p> Already have an account? </p>
              <div className="flex flex-col justify-center  gap-3">
                <p className="pb-2">
                  <span className="font-bold underline underline-offset-4 hover:cursor-pointer">
                    Login
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

export default SignUp;
