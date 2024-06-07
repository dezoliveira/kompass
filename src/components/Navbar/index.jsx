import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "active" : ""}>
          Home
      </NavLink> /
      <NavLink 
        to="/location"
        className={({ isActive }) => isActive ? "active" : ""}>
          Location
      </NavLink>
    </nav>
  )
}