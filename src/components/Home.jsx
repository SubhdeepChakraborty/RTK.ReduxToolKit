import React from "react";
import Navbar from "./Navbar";
import Create from "./Create";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[5rem] w-full flex items-center justify-center">
        <Create />
      </div>
    </div>
  );
};

export default Home;
