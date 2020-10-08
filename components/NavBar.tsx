import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import NavbarList from "./NavBarList";

const items = ["MAC", "iPhone", "iPad", "Music"];

const Navbar = () => {
  const themes = useContext(ThemeContext);

  return (
    <nav className="nav-container" style={themes}>
      <NavbarList items={items} />
    </nav>
  );
};
export default Navbar;
