import NavLink from "../buttons/NavLink";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getLinksMetaData } from "../../lib/config/links";

const LinksContainer = () => {
  const [selectedLink, setSelectedLink] = useState("");
  const { t } = useTranslation();
  const links = getLinksMetaData(t);
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
