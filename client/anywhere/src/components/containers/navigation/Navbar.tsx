import Navmenu from "./Navmenu"

const NavBar = () => {
  return (
    <div className="bg-white flex flex-row justify-between pl-4 pr-6 py-6">
      <div className="text-3xl text-gray-600 font-bold ml-20">
        Welcome Talia,
      </div>
      <Navmenu />
    </div>
  )
}

export default NavBar
