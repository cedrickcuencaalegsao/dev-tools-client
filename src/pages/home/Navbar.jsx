import { FaRegBookmark, FaRegListAlt } from "react-icons/fa";
import { LuLineChart } from "react-icons/lu";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-section wrapper">
      <div className="navbar-side">
        <div className="wrapper justify-center">
          <div className="mt-12">
            <img src={require("../../images/assets/logo.png")} alt="logo" />
          </div>

          <div className="mt-14 nav-btn-active items-center">
            <FaRegListAlt className="mr-3" />
            ALL
          </div>
          <div className="mt-9 nav-btn items-center">
            <LuLineChart className="mr-3" style={{ strokeWidth: "3px" }} />
            TRENDING
          </div>
          <div className="mt-9 nav-btn items-center">
            <FaRegBookmark className="mr-3" style={{ strokeWidth: "20px" }} />
            FAVORITES
          </div>
        </div>
      </div>

      <div className="content-side">
        <Outlet />
      </div>
    </div>
  );
};
