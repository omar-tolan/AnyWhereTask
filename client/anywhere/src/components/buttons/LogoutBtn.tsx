import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { useTranslation } from "react-i18next";

const LogoutBtn = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={className}>
      <button
        className="bg-blue-800 text-white rounded-md p-2 hover:opacity-90 cursor-pointer"
        onClick={handleClick}
      >
        <LoginIcon className="mr-2" />
        {t('navigation.logout')}
      </button>
    </div>
  );
};

export default LogoutBtn;
