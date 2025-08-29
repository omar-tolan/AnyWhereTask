import { useTranslation } from "react-i18next";

const CardsHeader = ({title}: {title: string}) => {
  const { t } = useTranslation();

  return (
        <div className="flex justify-between w-full">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <p className="text-blue-600 cursor-pointer">{t('common.all')}</p>
        </div>
  )
}

export default CardsHeader
