export default function () {
  return (
    <div>
      <div className="fixed flex w-full bg-white shadow-md p-5 items-center justify-between">
        <h1 className="hover:text-blue-500 text-2xl hover:cursor-pointer duration-500">
          Finance Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <a className="hover:text-blue-500 hover:cursor-pointer duration-500">
            Bank
          </a>
          <a className="hover:text-blue-500 hover:cursor-pointer duration-500">Investments</a>
          <a className="hover:text-blue-500 hover:cursor-pointer duration-500">Savings</a>
          <a className="hover:text-blue-500 hover:cursor-pointer duration-500">Pension</a>
          <a className="hover:text-blue-500 hover:cursor-pointer duration-500">Expenses</a>
        </div>
      </div>
    </div>
  );
}
