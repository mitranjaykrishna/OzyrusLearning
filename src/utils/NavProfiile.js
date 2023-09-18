import { AccountCircleOutlined, Notifications } from "@mui/icons-material";
import React from "react";

const NavProfiile = () => {
  return (
    <div className="flex justify-between gap-2">
      <div>
        <Notifications />
      </div>
      <div>
        <AccountCircleOutlined />
      </div>
      <div></div>
    </div>
  );
};

export default NavProfiile;
