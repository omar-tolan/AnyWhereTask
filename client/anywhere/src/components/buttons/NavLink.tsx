import type { ILinkMetaData } from "../../lib/config/links";

const NavLink = ({
  link,
  selected,
}: {
  link: ILinkMetaData;
  selected: boolean;
}) => {
  const primaryColor = selected ? "#0B3C5D" : "#FFFFFF";
  const bgColor = selected ? "bg-white" : "";

  return (
    <div
      data-testid={`navlink-${link.title}`}
      className={`flex items-center justify-start gap-3 p-4 cursor-pointer ${bgColor} ${
        !selected && "hover:opacity-70 transition"
      }`}
      onClick={() => console.log(link.link)}
    >
      <link.icon className="w-10 h-10" fontSize="large" sx={{ color: primaryColor }} />
      <div className="text-lg" style={{ color: primaryColor }}>
        {link.title}
      </div>
    </div>
  );
};

export default NavLink;
