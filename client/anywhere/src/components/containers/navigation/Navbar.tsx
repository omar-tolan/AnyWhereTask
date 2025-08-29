import { useMenu } from "../../../context/SideMenuContext";
import LanguageSwitcher from "../../LanguageSwitch";
import Navmenu from "./Navmenu";
import { Menu } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const { toggleMenu, isMenuOpen } = useMenu();
  return (
    <div className="bg-white flex flex-row justify-between py-3 md:pl-4 md:pr-6 md:py-6 px-4">
      <LanguageSwitcher />
      <button
        className={`lg:hidden ${isMenuOpen && "hidden"} cursor-pointer`}
        onClick={toggleMenu}
        aria-label={t('navigation.menu')}
      >
        <Menu />
      </button>
      <div className="hidden md:block text-md md:text-3xl text-gray-600 font-bold md:ml-20 ml-4">
        {t('navigation.welcome')}
      </div>
      <Navmenu />
    </div>
  );
};

export default NavBar;
