import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/slice/UserSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state) => state.app);
  const [updated, setUpdate] = useState();
  // console.log(users);
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdate(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdate({ ...updated, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updated));
    navigate("/read");
  };

  console.log(updated);

  return (
    <div
      className="absolute h-[100vh] w-[100vw] flex items-center 
      justify-center"
    >
      <div className=" border border-black relative  h-[500px] w-[500px] flex flex-col items-center justify-center">
        <input
          className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
          type="text"
          name="name"
          placeholder={updated && updated.name}
          onChange={newData}
        />
        <input
          className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
          type="text"
          name="email"
          placeholder={updated && updated.email}
          onChange={newData}
        />
        <input
          className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
          type="text"
          name="age"
          placeholder={updated && updated.age}
          onChange={newData}
        />
        <select
          name="gender"
          onChange={newData}
          className="w-[350px] p-2 bg-slate-700 text-white font-semibold px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
        >
          <option>{updated?.gender}</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input
          className=" bg-slate-700 text-black font-semibold  w-[350px] p-2 px-1 mb-[1rem] outline-none rounded-md border-b-2 border-b-gray-950"
          name="address"
          type="text"
          onChange={newData}
          placeholder={updated?.address}
        />
        <button
          onClick={handleUpdate}
          className="w-[100px] right-3 bottom-5 absolute p-2 px-1 outline-none mb-[1rem] border-b-2 rounded-md border-b-gray-950"
        >
          Update
        </button>
        <Link to="/read">
          <button className="w-[100px] left-3 top-3 absolute p-2 px-1 outline-none mb-[1rem] border-b-2 rounded-md border-b-gray-950">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Update;
