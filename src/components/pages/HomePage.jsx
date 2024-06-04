import React, { useContext } from "react";
import { data } from "../context/Context";
import { NavLink } from "react-router-dom";

function HomePage() {
  const { setSearchinput } = useContext(data);

  return (
    <div className="flex justify-center items-center w-full mt-60">
      <NavLink to="/allbooks">
        <button
          className="pt-2 pb-2 pr-6 pl-6 border rounded-2xl bg-blue-100 hover:shadow-2xl hover:bg-blue-200"
          onClick={() => setSearchinput("adventure")}
        >
          Start the Book Search
        </button>
      </NavLink>
    </div>
  );
}

export default HomePage;
