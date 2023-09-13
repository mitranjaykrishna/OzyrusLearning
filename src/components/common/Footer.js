import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-transparent ">
      <div className="">
        <div className="flex mx-[10%] justify-between items-center text-white">
          <div className="items-center h-[80px]">
            <img src="/assets/image 12.png" className="h-full" alt="N/A" />
          </div>
          {/* for big and mid screen */}
          <div>
            <ul className="flex justify-between gap-10 font-poppins">
              <li>Main</li>
              <li>About</li>
              <li>Game Features</li>
              <li>System Requirement</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <img src="/assets/twitter.svg" alt="T" />
            </div>
            <div>
              <img src="/assets/facebook.png" alt="F" />
            </div>
            <div>
              <img src="/assets/Vector.svg" alt="Y" />
            </div>
            <div>"</div>
          </div>
        </div>
      </div>
      <div className="mx-[8%] h-[1px] bg-[#757474] -mt-4"></div>
      <div className="flex justify-between mt-2 mx-[10%] h-14 text-sm ">
        <div className=" text-[#757474]">All rights reserved @Ozirus</div>
        <div className="flex gap-2">
          <div>Privacy Policy</div>
          <div>|</div>
          <div>Terms of Services</div>
          <div>|</div>
          <div>Code of Conduct</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
