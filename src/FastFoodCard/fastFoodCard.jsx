import { BiSolidShoppingBagAlt } from "react-icons/bi";
import "./FastFoodCard.css";

const FastFoodCard = ({ image, title, ingredients, price }) => {
  return (
    <div className="card w-full relative flex-col shadow-2xl fade-in-horiz rounded-lg">
      <div className="">
        <span className="bg-cyan-900 flex items-center justify-center absolute top-4 right-4 text-white text-xs font-medium me-2 px-4 py-0.5 ">
          price: {price.toLocaleString()} $
        </span>
        <div className="card__img flex justify-center items-center">
          <img className="w-[50%] h-[50%]" src={image} alt={title} />
        </div>
      </div>
      <div className="flex flex-col p-2 text-center ">
        <strong className="text-[10px] block mb-3">{title}</strong>
        <p className="text-[10px] mb-4 h-[40px]">{ingredients}</p>

        <button className="w-[90%] h-8 bg-transparent bg-yellow-500 text-gray-800  rounded-lg   py-1 flex gap-3 justify-center items-center mx-auto">
          <span className="text-[12px] ">Add to cart</span>
          <BiSolidShoppingBagAlt className="text-lg "></BiSolidShoppingBagAlt>
        </button>
      </div>
    </div>
  );
};

export default FastFoodCard;
