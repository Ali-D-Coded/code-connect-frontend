import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import codeConnectLogo from "./assets/code connnect logo.png";
import { useState } from "react";

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
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="relative flex h-screen  bg-slate-100">
      <aside
        className={
          openMenu
            ? `w-[250px] p-3 shadow-md bg-blue-400 `
            : `w-0 p-0 navbar overflow-auto  shadow-md bg-blue-400 fixed md:static h-screen md:w-[300px] md:p-3`
        }
      >
        <h1 className="my-2 text-xl font-bold">
          <NavLink to="/">
            <img
              src={codeConnectLogo}
              alt="logo"
              // className="w-10 h-10"
            />
          </NavLink>
        </h1>

        <nav className="">
          <ul className="">
            {paths.map((path) => (
              <li key={path.name} className="">
                <NavLink
                  to={path.url}
                  className={({ isActive, isPending }) =>
                    `block h-10 p-2 text-white my-1 hover:bg-blue-500/60 hover:rounded-md ${
                      isActive
                        ? "shadow-lg bg-blue-500/60  rounded-md"
                        : isPending
                        ? " "
                        : ""
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
        <nav className="bg-slate-200 h-10 w-full">
          <div>Logo</div>
        </nav>
        <div>
          <Outlet />
        </div>
      </section>
      <div
        className="fixed w-10 h-10 overflow-auto bg-red-300 rounded-full bottom-5 right-5 md:hidden"
        onClick={() => {
          console.log(openMenu);

          setOpenMenu(!openMenu);
        }}
      ></div>
    </div>
  );
}

export default App;
