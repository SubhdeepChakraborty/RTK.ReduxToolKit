import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../store/slice/UserSlice";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchData(search));
  }, [search]);

  console.log(search);

  return (
    <div className="flex items-center justify-evenly bg-white w-[100vw] h-[70px]">
      <div>
        <span className="font-bold text-2xl">RTK</span>
      </div>
      <div>
        <Link to="/">
          <span className="font-semibold">Create Post</span>
        </Link>
      </div>
      <div>
        <Link to="/read">
          <span className="font-semibold">All Post</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="Search.."
          className="p-[2px] px-1 rounded outline-none border-none "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
