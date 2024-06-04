import React, { useContext } from "react";
import { data } from "../context/Context";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  const { setSearchinput } = useContext(data);

  const buttonClass =
    "pt-2 pb-2 pr-6 pl-6 border rounded-2xl bg-blue-100 hover:shadow-2xl hover:bg-blue-300";

  return (
    <>
      <div className="flex flex-row justify-around items-center bg-[#3e3d3d] max-sm:flex-col max-sm:items-center">
        <NavLink to="/">
          <div className="flex flex-row items-center">
            <div className="pt-8 pr-8 pb-8 pl-2 text-[32px]">
              <span className="text-[#ffffff]">BookShelf</span>
            </div>
          </div>
        </NavLink>
        <div className="flex flex-row">
          <NavLink to="/allbooks">
            <div className="p-8">
              <button
                className={buttonClass}
                onClick={() => setSearchinput("adventure")}
                aria-label="Main Directory"
              >
                Main Directory
              </button>
            </div>
          </NavLink>
          <NavLink to="/mybooks">
            <div className="p-8">
              <button className={buttonClass} aria-label="My BookShelf">
                My BookShelf
              </button>
            </div>
          </NavLink>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NavBar;
