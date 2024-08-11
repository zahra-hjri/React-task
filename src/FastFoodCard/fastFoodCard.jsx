import { BiSolidShoppingBagAlt } from "react-icons/bi";

const FastFoodCard = ({ id, imageUrl, name, ingredients, price }) => {
  return (
    <div className="w-full relative flex-col shadow-lg rounded-md" key={id}>
      <div className="">
        <span className="bg-green-500 absolute top-6 right-6 text-white text-xs font-medium me-2 px-4 py-2">
          {price}
        </span>
        <img className="rounded-md" src={imageUrl} alt={name} />
      </div>
      <div className="flex-col justify-center items-center gap-2 text-center">
        <strong className="text-[12px] block">{name}</strong>
        <p className="text-[12px]">{ingredients}</p>
        <button className="w-full h-10 bg-orange-600 rounded-lg text-white py-0.5 flex gap-3 justify-center items-center m-auto">
          <span className="text-[12px]"> افزودن به سبد خرید</span>
          <BiSolidShoppingBagAlt className="text-lg"></BiSolidShoppingBagAlt>
        </button>
      </div>
    </div>
  );
};

export default FastFoodCard;
