import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const create = (e) => {
    const value = e.target.value;
    setUser({
      ...users,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("...users", users);
    //Data send krna k lia dispatch chaiye
    dispatch(createUser(users));
    navigate("/read");
  };

  console.log(users);

  return (
    <div>
      <form>
        <div>
          <div className="flex flex-col items-center justify-center">
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={create}
              className=" bg-slate-700 text-black font-semibold font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none 
              rounded-md border-b-2 border-b-gray-950"
            />
            <input
              placeholder="email"
              type="text"
              name="email"
              onChange={create}
              className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <input
              placeholder="Age"
              name="age"
              type="text"
              onChange={create}
              className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
            />
            <select
              onChange={create}
              name="gender"
              className="w-[350px] p-2 bg-slate-700 text-white font-semibold px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
            >
              <option>Type</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <input
              className="w-[350px] p-2 px-1 bg-slate-700 text-black font-semibold outline-none mb-[1rem] border-b-2 rounded-md border-b-gray-950"
              placeholder="address"
              name="address"
              onChange={create}
              type="text"
              bg-slate-700
              text-black
              font-semibold
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-[350px] p-2 px-1 font-semibold outline-none border-b-2 rounded-md border-b-gray-950"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
