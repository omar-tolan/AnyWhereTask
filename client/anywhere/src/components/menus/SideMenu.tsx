import LinksContainer from "../navigation/LinksContainer";
import { useMenu } from "../../context/SideMenuContext";
import { Close } from "@mui/icons-material";

const SideMenu = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          data-testid="menu-overlay"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50 w-64 lg:w-[20%] flex flex-col
          bg-gradient-to-b from-[#0B3C5D] to-[#2575A6] pt-6 pb-5 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static`}
      >
        <div className="flex items-center justify-between px-4">
          <h1 className="text-3xl font-bold text-white">Coligo</h1>
          <button
            data-testid="menu-close-btn"
            className="lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <Close sx={{ color: "white" }} />
          </button>
        </div>

        <div className="mt-8">
          <LinksContainer />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
