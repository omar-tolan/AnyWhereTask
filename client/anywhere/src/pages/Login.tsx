import { useSelector } from "react-redux";
import Card from "../components/login/Card";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";
import { useEffect } from "react";
import LanguageSwitcher from "../components/LanguageSwitch";

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full bg-gray-800 h-screen flex flex-col">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Card />
      </div>
    </div>
  );
};

export default LoginPage;
