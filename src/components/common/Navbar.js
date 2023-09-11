import React from "react";

const Navbar = () => {
  return (
    <div
      className="px-[30px] py-[15.6px] fixed w-full "
      style={{
        backgroundImage: `url('/assets/Frame 1261152717.svg')`,
      }}
    >
      <div className="hidden md:block">
        <div className="flex  h-[50px]  items-center text-white   ">
          <div className="w-[200px] items-center my-[10px]">
            <img src="/assets/image 12.png" alt="N/A" />
          </div>
          <div>
            <ul className="flex ml-[290px] justify-between gap-[30px] text-xl font-poppins">
              <li>Home</li>
              <li className="font-bold underline ">Discover</li>
              <li>Marketplace</li>
              <li>Creators</li>
              <li>Community</li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
