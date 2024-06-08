import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex bg-black justify-around">
      <Link to={'/'}><h1 className=" text-white text-3xl p-4">Booksta</h1></Link>
      
      <div className="flex my-2 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
        <button className="flex-1 font-bold text-md bg-white px-2 rounded-xl" onClick={() => navigate('/bookshelf')}>
          My Bookshelf
        </button>
      </div>
    </div>
  );
};

export default Navbar;
