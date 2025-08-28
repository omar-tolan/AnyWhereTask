import LinksContainer from "../navigation/LinksContainer";
import { linksMetaData } from "../../lib/config/links";
// import { useState } from "react";

const SideMenu = () => {
    // const [open, setOpen] = useState(false);
  return (
    <div className="hidden md:flex w-[15%] flex-col bg-gradient-to-b from-[#0B3C5D] to-[#2575A6] pt-4 pb-5 shadow-2xl">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl text-center font-bold text-white mt-5">Coligo</h1>
        <div className="mt-8">
            <LinksContainer links={linksMetaData}/>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
