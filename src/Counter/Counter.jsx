const Counter = () => {
  return (
    <>
      <div className="w-[80%] flex justify-center gap-5 items-center mx-auto my-10">
        <button className="bg-green-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center">
          -
        </button>
        <button className="bg-red-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center">
          +
        </button>
        <button className="bg-gray-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center">
          amount
        </button>
        <p></p>
      </div>
    </>
  );
};

export default Counter;
