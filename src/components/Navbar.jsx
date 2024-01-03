import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 rounded-lg bg-white items-start justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">Max</p>
      </NavLink>
      <nav className="flex text-lg gap-7 front-medium">
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
