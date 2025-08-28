const CardsHeader = ({title}: {title: string}) => {
  return (
        <div className="flex justify-between w-full">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <p className="text-blue-600">All</p>
        </div>
  )
}

export default CardsHeader
