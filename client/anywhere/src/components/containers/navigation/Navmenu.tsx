import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { Mail, Notifications, AccountCircle } from "@mui/icons-material";
import SearchInput from "../../inputs/SearchInput";
import LogoutBtn from "../../buttons/LogoutBtn";

const IconGradient = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="iconGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B3C5D" />
        <stop offset="100%" stopColor="#2575A6" />
      </linearGradient>
    </defs>
  </svg>
);

const Navmenu = () => {
  return (
    <div data-testid="Navmenu" className="flex flex-row items-center gap-4">
      <div className="flex flex-row justify-start">
        <SearchInput />
      </div>
      <Stack spacing={2} direction="row">
        <div className="hidden lg:block space-x-3">
          <Badge badgeContent={1} color="primary" className="cursor-pointer">
            <IconGradient />
            <Notifications
              fontSize="large"
              sx={{ fill: "url(#iconGradient)" }}
            />
          </Badge>
          <Badge badgeContent={3} color="primary" className="cursor-pointer">
            <IconGradient />
            <Mail fontSize="large" sx={{ fill: "url(#iconGradient)" }} />
          </Badge>
          <AccountCircle fontSize="large" className="cursor-pointer" />
        </div>

        <LogoutBtn />
      </Stack>
    </div>
  );
};

export default Navmenu;
