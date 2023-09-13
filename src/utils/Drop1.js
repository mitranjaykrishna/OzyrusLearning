import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, Menu, MenuItem } from "@mui/material";
const Drop1 = () => {
  const options = ["Name", "Price", "Likes", "Date Added"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Name");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if (option && option !== selectedOption) {
      setSelectedOption(option);
    }
  };
  return (
    <div className="">
      <Button
        className=""
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          fontSize: "small",

          textDecoration: "underline",
          "&:hover": {
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            textDecoration: "underline",
          },
        }}
      >
        <ul style={{ listStyleType: "disc" }}>
          <li>
            {selectedOption} <ArrowUpwardIcon className=" mb-1 ml-1" />
          </li>
        </ul>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#393B3E", // Example: Change the background color
            // Add any other styles you want to apply to the Paper component
          },
        }}
      >
        <div
          className=" bg-[#393B3E] flex flex-col justify-center"
          style={{ width: "150px", height: "120px" }}
        >
          {options.map((option, index) =>
            option !== selectedOption ? (
              <MenuItem
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#393B3E",
                  borderBottom:
                    index === options.length - 1 ? "none" : "1px solid #505050",
                }}
                key={option}
                onClick={() => handleClose(option)}
              >
                {option}
              </MenuItem>
            ) : null
          )}
        </div>
      </Menu>
    </div>
  );
};

export default Drop1;
