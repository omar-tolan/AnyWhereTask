import type { ILinkMetaData } from "../../lib/config/links";
import NavLink from "../buttons/NavLink";
import { useState } from "react";

const LinksContainer = ({ links }: { links: ILinkMetaData[] }) => {
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <button onClick={() => setSelectedLink(link.title)}>
          <NavLink
            key={link.title}
            link={link}
            selected={selectedLink === link.title}
          />
        </button>
      ))}
    </div>
  );
};

export default LinksContainer;
