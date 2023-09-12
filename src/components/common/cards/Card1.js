import { Button } from "@mui/material";
import React from "react";

const Card1 = ({ key, imageUrl, dpUrl, userName, assetName, category }) => {
  return (
    <div className=" bg-white text-black flex flex-col justify-between rounded-xl pb-10">
      <div className="rounded-lg  object-cover relative py-32 px-10 pb-[65%]">
        <img
          src={imageUrl}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          alt="N/A"
        />
      </div>
      <div className=" ">
        <div>
          <div className="mt-3 ml-2 flex items-center">
            <div>
              <img src={dpUrl} className=" rounded-xl h-6 w-6" alt="DP" />
            </div>
            <p className="text-center ml-2 font-semibold text-[#454545]">
              {userName}
            </p>
          </div>
          <p className="ml-2 mt-2 font-bold text-xl">{assetName}</p>
          <div className=" flex items-center justify-between mr-2 mt-8">
            <div className="ml-2">
              <p className=" text-[#8C939A] font-semibold text-sm">Category</p>
              <p className="  font-semibold mt-2">{category}</p>
            </div>
            <div className=" ">
              <Button
                disableUnderline
                color="primary"
                variant="contained"
                sx={{
                  "&.MuiButton-contained": {
                    bgcolor: "#D7E9FE",
                    color: "#4697F3",
                    boxShadow: "none",
                    borderRadius: "8px",
                    padding: "4px 13px",
                  },
                }}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
