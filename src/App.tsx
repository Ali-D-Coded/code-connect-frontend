import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import codeConnectLogo from "./assets/code connnect logo.png";
import { useState } from "react";
import useScreenWidth from "./hooks/useScreenWidth";

const paths = [
  {
    name: "Dashboard",
    url: "/",
  },
  {
    name: "Users",
    url: "/users",
  },
  {
    name: "Certificates",
    url: "/certificates",
  },
  {
    name: "Events",
    url: "/events",
  },
];

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const screenWidth = useScreenWidth();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const isMobile = screenWidth < 648; // Example breakpoint for mobile

  return (
    <div className="relative flex h-screen bg-slate-100">
      <aside
        className={
          isMobile
            ? openMenu
              ? `w-full h-screen p-3 bg-blue-400 fixed`
              : "w-0 p-0 overflow-hidden bg-blue-400"
            : "w-[250px] h-screen p-3 bg-blue-400 "
        }
      >
        <h1 className="my-2 text-xl font-bold">
          <NavLink to="/">
            <img src={codeConnectLogo} alt="logo" />
          </NavLink>
        </h1>
        <nav>
          <ul>
            {paths.map((path) => (
              <li key={path.name}>
                <NavLink
                  to={path.url}
                  className={({ isActive }) =>
                    `block h-10 p-2 text-white my-1 hover:bg-blue-500/60 hover:rounded-md ${
                      isActive && "shadow-lg bg-blue-500/60 rounded-md"
                    }`
                  }
                >
                  {path.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <section className="w-full">
        <nav
          className={`w-full flex items-center p-1 ${
            isMobile ? "bg-blue-400" : "bg-blue-200"
          } `}
        >
          {isMobile && (
            <h1 className="w-32 my-2 text-xl font-bold ">
              <NavLink to="/">
                <img src={codeConnectLogo} alt="logo" className="w-32" />
              </NavLink>
            </h1>
          )}

          <div className="flex items-center self-end gap-2">
            <div>logout</div>
            <div>notifications</div>
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
      </section>
      {isMobile && (
        <div
          className="fixed w-10 h-10 overflow-auto bg-red-300 rounded-full bottom-5 right-5 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default App;
