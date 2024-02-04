import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-4 ">
          <li className="bg-green-600 px-4 py-2 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-green-600 px-4 py-2 rounded-lg">
            <Link to="/users">Users</Link>
          </li>
          <li className="bg-green-600 px-4 py-2 rounded-lg">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
