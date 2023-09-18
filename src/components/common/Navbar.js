import { IconButton, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavProfiile from "../../utils/NavProfiile";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <div
      className="px-[30px] py-[13.6px] fixed w-full "
      style={{
        backgroundImage: `url('/assets/Frame 1261152717.svg')`,
      }}
    >
      <div>
        <div className="flex  h-[50px] justify-around items-center text-white   ">
          <div className=" items-center ">
            <img src="/assets/image 12.png" alt="N/A" />
          </div>
          {/* for big and mid screen */}
          <div className="hidden md:block">
            <ul className="flex gap-[30px] text-xl font-poppins">
              <li>Home</li>
              <li className="font-bold underline ">Discover</li>
              <li>Marketplace</li>
              <li>Creators</li>
              <li>Community</li>
            </ul>
          </div>

          {/* For small screen */}
          <div className="md:hidden">
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              style={{}}
              PaperProps={{
                sx: {
                  background: "rgba(66,66,66,0.3)",
                  color: "white",
                  backdropFilter: "blur(5px)",
                  fontStyle: "Poppins",
                },
              }}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <div className=" px-10 flex flex-col gap-[50px] justify-center mt-[80px] text-xl">
                  <div>Home</div>
                  <div className="font-bold underline">Discover</div>
                  <div>Marketplace</div>
                  <div>Creators</div>
                  <div>Community</div>
                </div>
              </div>
            </SwipeableDrawer>
          </div>
          <div>
            <NavProfiile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
