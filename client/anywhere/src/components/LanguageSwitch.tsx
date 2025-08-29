import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className="flex w-20 bg-white rounded-md overflow-hidden border border-gray-200">
      <button 
        className={`w-full py-2 text-sm font-medium transition-colors ${
          i18n.language === "en" 
            ? "bg-blue-500 text-white" 
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`} 
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button 
        className={`w-full py-2 text-sm font-medium transition-colors ${
          i18n.language === "de" 
            ? "bg-blue-500 text-white" 
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`} 
        onClick={() => changeLanguage("de")}
      >
        DE
      </button>
    </div>
  );
}

export default LanguageSwitcher;