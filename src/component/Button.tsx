type BaseButton = {
  title?: string
  deleted?: boolean
}
const Button = ({ title, deleted }: BaseButton): JSX.Element => {
  return (
    <div className="p-1.5 w-full inline-block sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
        <div className="w-full px-1 px-4 text-black transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40 ">
          chimcuxanh1
        </div>
        <div className="w-full px-1 px-4 text-black transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40 ">
          chimcuxanh2
        </div>
        <div className="w-full px-1 px-4 text-black transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40 ">
          chimcuxanh3
        </div>
      </div>
    </div>
  )
}

export default Button
