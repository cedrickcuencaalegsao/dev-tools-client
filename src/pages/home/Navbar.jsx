import { FaRegBookmark, FaRegListAlt } from "react-icons/fa";
import { LuLineChart } from "react-icons/lu";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-section wrapper poppins">
      <div className="navbar-side">
        <div className="wrapper justify-center">
          <div className="mt-12">
            <img src={require("../../images/assets/logo.png")} alt="logo" />
          </div>

          <div className="mt-14 nav-btn-active">
            <FaRegListAlt className="mr-3" />
            ALL
          </div>
          <div className="mt-9 nav-btn">
            <LuLineChart
              className="mr-3"
              style={{ strokeWidth: "3px", fontSize: "1rem" }}
            />
            TRENDING
          </div>
          <div className="mt-9 nav-btn">
            <FaRegBookmark
              className="mr-3"
              style={{ strokeWidth: "20px", fontSize: "1rem" }}
            />
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
