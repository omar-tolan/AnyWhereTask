import Navmenu from "./Navmenu"

const NavBar = () => {
  return (
    <div className="bg-white flex flex-row justify-between py-3 md:pl-4 md:pr-6 md:py-6">
      <div className="text-md md:text-3xl text-gray-600 font-bold md:ml-20 ml-4">
        Welcome Talia,
      </div>
      <Navmenu />
    </div>
  )
}

export default NavBar
