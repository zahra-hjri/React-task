import { BiSolidShoppingBagAlt } from "react-icons/bi";
import "./ProductCard.css";

const FastFoodCard = ({ image, title, price, loading }) => {
  return (
    <div className="card w-full h-full relative flex-col border-[1px] border-gray-300 fade-in-horiz rounded-lg justify-between">
      <div
        className={` ${
          loading ? "card__img" : ""
        } flex justify-center py-5 w-full h-1/2 border-[1px] border-b-gray-300`}
      >
        <img className="w-1/2 h-full" src={image} alt={title} />
      </div>

      <div className="flex flex-col py-4 text-center h-1/2">
        <p className="text-[10px] text-start px-5 w-full h-1/2">{title}</p>
        <span className=" text-white text-xs font-medium me-2 px-4 py-0.5 bg-slate-900 p-1 rounded-md w-fit mx-5 mb-5">
          price: {price.toLocaleString()} $
        </span>

        <button className="w-[90%] h-8 bg-transparent bg-white border-[1px] border-gray-800 text-gray-800 font-bold  rounded-lg py-2 flex gap-3 justify-center items-center mx-5">
          <span className="text-[12px] ">Add to cart</span>
          <BiSolidShoppingBagAlt className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default FastFoodCard;
