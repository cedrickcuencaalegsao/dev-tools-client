import { FaRegBookmark, FaRegListAlt } from "react-icons/fa";
import { LuLineChart } from "react-icons/lu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const routes = [
  {
    href: "/home/all",
    name: "ALL",
  },
  {
    href: "/home/trending",
    name: "TRENDING",
  },
  {
    href: "/home/favorites",
    name: "FAVORITES",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <div className="navbar-section wrapper poppins">
      <div className="navbar-side">
        <div className="wrapper justify-center">
          <div className="mt-12 mb-5">
            <img src={require("../../images/assets/logo.png")} alt="logo" />
          </div>

          {routes.map((r) => {
            const isActive = pathname.startsWith(r.href);
            return (
              <div
                className={isActive ? "nav-btn-active" : "nav-btn"}
                onClick={() => navigate(r.href)}
              >
                <FaRegListAlt className="mr-3" />
                {r.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className="content-side h-[100vh] overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
