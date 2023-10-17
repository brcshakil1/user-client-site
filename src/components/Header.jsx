import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-emerald-500">
        <ul className="flex justify-center gap-5 py-6">
          <li className="text-xl text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-xl text-black">
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
