import { useDispatch, useSelector } from "react-redux";
import { decreament } from "../counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[80%] flex justify-center gap-5 items-center mx-auto my-10">
        <button
          onClick={() => dispatch(decreament())}
          className="bg-green-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center"
        >
          -
        </button>
        <span className="text-lg text-black">count:{count}</span>
        <button className="bg-red-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center">
          +
        </button>
        <button className="bg-gray-600 rounded-lg text-white text-bold text-lg w-28 h-10 cursor-pointer text-center">
          amount
        </button>
      </div>
    </>
  );
};

export default Counter;
