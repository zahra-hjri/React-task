import { BiSolidShoppingBagAlt } from "react-icons/bi";

const FastFoodCard = ({ imageUrl, name, ingredients, price }) => {
  return (
    <div className="w-full relative flex-col shadow-lg rounded-md">
      <div className="">
        <span className="bg-green-500 flex items-center justify-center absolute top-6 right-6 text-white text-xs font-medium me-2 px-4 py-0.5 rounded-sm">
          قیمت: {price.toLocaleString()} تومان
        </span>
        <img className="rounded-md w-full h-full" src={imageUrl} alt={name} />
      </div>
      <div className="flex flex-col py-4 text-center ">
        <strong className="text-[12px] block mb-3">{name}</strong>
        <p className="text-[10px]  mb-4 h-[40px]">{ingredients}</p>

        <button className="w-[90%] h-8 bg-transparent border-green-400 hover:bg-green-400 text-green-400 hover:text-white border-[1px] rounded-md py-0.5 flex gap-3 justify-center items-center mx-auto">
          <span className="text-[12px] "> افزودن به سبد خرید</span>
          <BiSolidShoppingBagAlt className="text-lg "></BiSolidShoppingBagAlt>
        </button>
      </div>
    </div>
  );
};

export default FastFoodCard;
