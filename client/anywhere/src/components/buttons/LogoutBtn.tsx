import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";

const LogoutBtn = ({ className }: { className?: string }) => {
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
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
