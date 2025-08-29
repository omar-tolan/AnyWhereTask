import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginBtn = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(login());
    navigate("/");
  };
  return (
    <div className={className}>
      <button
        className="bg-blue-300 text-white rounded-md p-2 hover:opacity-90 cursor-pointer"
        onClick={handleClick}
      >
        <LoginIcon className="mr-2" />
        {t('login.loginButton')}
      </button>
    </div>
  );
};

export default LoginBtn;
