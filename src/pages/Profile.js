import React from "react";
import Card1 from "../components/common/cards/Card1";
import Items from "../utils/Items";

import Drop1 from "../utils/Drop1";
import Drop2 from "../utils/Drop2";
const Profile = () => {
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
      <div className="flex justify-around mb-2">
        <Drop1 />
        <Drop2 />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:mx-20 mx-5">
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
