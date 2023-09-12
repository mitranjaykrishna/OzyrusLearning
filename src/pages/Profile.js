import React, { useState } from "react";
import Card1 from "../components/common/cards/Card1";
import Items from "../utils/Items";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { FormControl, MenuItem, Select } from "@mui/material";
const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("Name");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className="bg-cover bg-center text-white min-h-screen "
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 9.svg')`,
      }}
    >
      <div className="pt-28  font-poppins">
        <div className="flex justify-center text-[52px] font-poppins font-semibold ">
          Explore Cities
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/Vector 1.svg"
            className=" h-[11px] -mt-5"
            alt="dw"
          />
        </div>
      </div>
      <div className="flex justify-around mb-32">
        <div className="">
          <FormControl
            variant="standard"
            sx={{
              background: "transparent",
              borderRadius: "8px",
              borderColor: "transparent",
              borderBottom: "none",
              color: "white",
              "& .MuiSelect-icon": {
                display: "none",
              },
            }}
          >
            <Select
              value={selectedOption}
              onChange={handleChange}
              sx={{
                "& .MuiMenuItem-root": {
                  color: "red", // Change color for menu items
                },
              }}
            >
              <MenuItem value="Name">Name</MenuItem>
              <MenuItem value="Price">Price</MenuItem>
              <MenuItem value="Likes">Likes</MenuItem>
              <MenuItem value="Date Added">Date Added</MenuItem>
            </Select>
          </FormControl>
          <ArrowUpwardIcon className=" -ml-4" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 mx-20 overflow-y-hidden ">
        {Items.map((item, i) => (
          <Card1
            key={item.itemId}
            imageUrl={item.imageUrl}
            dpUrl={item.dpUrl}
            userName={item.userName}
            assetName={item.assetName}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
