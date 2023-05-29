const ExpansionButton = ({ lable, onClickCallback }) => {
  return (
    <div>
      <button
        onClick={onClickCallback}
        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 "
      >
        <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
          {lable}
        </span>
      </button>
    </div>
  )
}

export default ExpansionButton
