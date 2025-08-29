import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const SearchInput = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-start items-center gap-2 border-1 border-gray-400 px-4 py-2 rounded-2xl bg-gray-100">
      <Search fontSize="small"/>
      <input className="bg-transparent border-none outline-none" placeholder={t('navigation.search')} />
    </div>
  )
}

export default SearchInput
