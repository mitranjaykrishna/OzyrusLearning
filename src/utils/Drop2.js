import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
const Drop2 = () => {
  const options = ["Weapons", "Characters", "Buildings", "Cities", "Cars"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

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
          backgroundColor: "#393B3E",
          border: "none",
          boxShadow: "none",
          width: "170px",
          "&:hover": {
            backgroundColor: "#393B3E",
            border: "none",
            boxShadow: "none",
          },
        }}
      >
        <ul>
          <li>
            Filter <FilterListIcon className=" mb-1 ml-1" />
          </li>
        </ul>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        sx={{
          "& .MuiPaper-root": {
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            backgroundColor: "#393B3E", // Example: Change the background color
            // Add any other styles you want to apply to the Paper component
          },
        }}
      >
        <div className="" style={{ width: "170px" }}>
          {options.map((option, index) => (
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
          ))}
        </div>
      </Menu>
    </div>
  );
};

export default Drop2;
