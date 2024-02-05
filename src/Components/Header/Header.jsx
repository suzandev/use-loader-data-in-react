import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-4 ">
          <li className="rounded-lg bg-green-600 px-4 py-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="rounded-lg bg-green-600 px-4 py-2">
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className="rounded-lg bg-green-600 px-4 py-2">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
