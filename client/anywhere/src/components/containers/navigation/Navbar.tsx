import { useMenu } from "../../../context/SideMenuContext";
import Navmenu from "./Navmenu";
import { Menu } from "@mui/icons-material";

const NavBar = () => {
  const { toggleMenu, isMenuOpen } = useMenu();
  return (
    <div className="bg-white flex flex-row justify-between py-3 md:pl-4 md:pr-6 md:py-6 px-4">
      <button
        className={`lg:hidden ${isMenuOpen && "hidden"} cursor-pointer`}
        onClick={toggleMenu}
      >
        <Menu />
      </button>
      <div className="hidden md:block text-md md:text-3xl text-gray-600 font-bold md:ml-20 ml-4">
        Welcome Talia,
      </div>
      <Navmenu />
    </div>
  );
};

export default NavBar;
