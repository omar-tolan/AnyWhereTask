import SideMenu from "../components/menus/SideMenu";
import Dashboard from "../components/containers/Dashboard";
import { MenuProvider } from "../context/SideMenuContext";

const Home = () => {
  return (
    <div className="flex flex-row h-screen">
      <MenuProvider>
        <SideMenu />
        <Dashboard />
      </MenuProvider>
    </div>
  );
};

export default Home;
