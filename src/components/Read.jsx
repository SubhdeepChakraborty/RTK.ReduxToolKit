import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, showUser } from "../store/slice/UserSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Read = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const { users, loading, searchData } = useSelector((state) => state.app);

  const [radioData, setRadio] = useState("");

  return (
    <div className="">
      <Navbar />

      <div className="w-[100vw] flex items-center justify-center p-3">
        <div className="flex items-center justify-center">
          <input
            className="h-[16px] w-[16px] mr-[2px]"
            type="radio"
            name="gender"
            checked={radioData === ""}
            onChange={(e) => setRadio("")}
          />
          <label className="mr-[1rem] text-2xl font-semibold ">All</label>
        </div>
        <div className="flex items-center justify-center">
          <input
            className="h-[16px] w-[16px] mr-[2px]"
            type="radio"
            name="gender"
            value="male"
            checked={radioData === "male"}
            onChange={(e) => setRadio(e.target.value)}
          />
          <label className="mr-[1rem] text-2xl font-semibold ">Male</label>
        </div>
        <div className="flex items-center justify-center">
          <input
            className="h-[16px] w-[16px] mr-[2px]"
            type="radio"
            name="gender"
            value="female"
            checked={radioData === "female"}
            onChange={(e) => setRadio(e.target.value)}
          />
          <label className="mr-[1rem] text-2xl font-semibold ">Female</label>
        </div>
      </div>

      {loading ? (
        <>
          <div className="w-[100vw] h-[20vh] flex items-center justify-center">
            <span className="text-6xl  font-semibold">Loading</span>
          </div>
        </>
      ) : (
        <>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2 ml-[1rem] mr-[1rem]">
            {users
              ?.filter((ele) => {
                if (searchData.length === 0) {
                  return ele;
                } else {
                  return ele.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
                }
              })

              .filter((ele) => {
                if (radioData === "male") {
                  return ele.gender === radioData;
                } else if (radioData === "female") {
                  return ele.gender === radioData;
                } else {
                  return ele;
                }
              })

              .map((item, id) => (
                <div
                  key={id}
                  className="p-10 text-xl font-semibold border-black border relative"
                >
                  <div className="flex items-center ">
                    <span>{item.name}</span>
                  </div>
                  <div className="flex items-center  ">
                    <span>{item.email}</span>
                  </div>
                  <div className="flex items-center ">
                    <span>{item.age}</span>
                  </div>
                  <div className="flex items-center ">
                    <span>{item.gender}</span>
                  </div>
                  <div className="flex items-center ">
                    <span>{item.address}</span>
                  </div>
                  <div>
                    <button
                      className="absolute right-2 rounded px-1  font-semibold
                      text-sm bg-red-600 text-white"
                      onClick={() => dispatch(deleteUser(item.id))}
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${item.id}`}>
                      <button
                        className="absolute right-2 top-2 rounded px-1  
                      text-sm  bg-blue-600 text-white"
                      >
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Read;
