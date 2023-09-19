import React, { useState } from "react";
import Card1 from "../components/common/cards/Card1";
import Items from "../utils/Items";
import Drop2 from "../utils/Drop2";
import "../css/Home.css";
import Card2 from "../components/common/cards/Card2";
const Home = () => {
  const [activeButton, setActiveButton] = useState("All");
  return (
    <div
      className="bg-cover bg-center text-white min-h-screen "
      style={{
        backgroundImage: `url('assets/MacBook Pro 16_ - 9.svg')`,
      }}
    >
      <div className="flex pt-28  font-poppins justify-between md:gap-[20%] md:mx-[5%] items-center ">
        <div className="flex justify-between font-poppins md:gap-[20%] items-center ">
          <div className="flex justify-between font-poppins md:gap-[5%] items-center">
            <button
              className={
                activeButton === "All" ? "active-button" : "inactive-button"
              }
              onClick={() => setActiveButton("All")}
            >
              All
            </button>
            <button
              className={
                activeButton === "Characters"
                  ? "active-button"
                  : "inactive-button"
              }
              onClick={() => setActiveButton("Characters")}
            >
              Characters
            </button>
            <button
              className={
                activeButton === "Buildings"
                  ? "active-button"
                  : "inactive-button"
              }
              onClick={() => setActiveButton("Buildings")}
            >
              Buildings
            </button>
            <button
              className={
                activeButton === "Cities" ? "active-button" : "inactive-button"
              }
              onClick={() => setActiveButton("Cities")}
            >
              Cities
            </button>
            <button
              className={
                activeButton === "Weapons" ? "active-button" : "inactive-button"
              }
              onClick={() => setActiveButton("Weapons")}
            >
              Weapons
            </button>
          </div>
        </div>
      </div>
      <div
        className="py-5 mx-[5%] rounded-2xl mt-4 "
        style={{
          backgroundImage: `url('/assets/Rectangle 75.png')`,
        }}
      >
        <div className="ml-4 mt-16 ">
          <div className="">
            <img
              src="/assets/image 13.png"
              className=" rounded-md h-16 w-16 border-2 "
              alt="DP"
            />
          </div>
          <p className="mt-8 text-[30.33px]">Video Game 3D City Design</p>
          <div className="flex justify-between">
            {" "}
            <p className=" text-[20.33px]">Video Game Name Asset</p>
            <button className=" bg-[rgb(63,63,63,0.9)] mr-4 py-2 px-3 rounded-md">
              View Item
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around  my-6  items-center">
        <div className="flex">
          <div className="  bg-[rgb(63,63,63,0.9)] z-10 py-2 px-3 rounded-md">
            Trending
          </div>
          <div className=" bg-[#292B2E] -mx-1 py-2 px-5 rounded-md">Top</div>
        </div>
        <Drop2 />
      </div>

      <div className="grid md:grid-cols-2 ">
        <div>
          {" "}
          <div className="flex justify-evenly w-[100%] mt-4 text-[#8C939A]">
            <div>Rank</div>
            <div>Name</div>
            <div>Assets</div>
          </div>
          <div className="mx-[15%] h-[1px] bg-[#757474] mt-4"></div>
        </div>
        <div>
          <div className="flex justify-evenly w-[100%] mt-4  text-[#8C939A]">
            <div className="hidden md:block">Rank</div>
            <div className="hidden md:block">Name</div>
            <div className="hidden md:block">Assets</div>
          </div>
          <div className="mx-[15%] h-[1px] hidden md:block bg-[#757474] mt-4"></div>
        </div>
        <Card2 /> <Card2 />
        <Card2 /> <Card2 />
        <Card2 />
        <Card2 />
        <Card2 /> <Card2 />
        <Card2 /> <Card2 />
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

export default Home;
