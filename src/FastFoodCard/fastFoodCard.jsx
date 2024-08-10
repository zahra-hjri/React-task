import { BiSolidShoppingBagAlt } from "react-icons/bi";

const FastFoodCard = ({ id, imageUrl, name, ingredients, price }) => {
  return (
    <div className="w-full relative flex-col p-4 shadow-lg rounded-lg" key={id}>
      <div className="">
        <span className="bg-green-500 absolute top-6 right-6 text-white text-xs font-medium me-2 px-4 py-2">
          {price}
        </span>
        <img className="rounded-lg" src={imageUrl} alt={name} />
      </div>
      <strong>{name}</strong>
      <p>{ingredients}</p>
      <button className="w-full h-10 bg-orange-600 rounded-lg text-white py-0.5 flex gap-3 justify-center items-center m-auto">
        <span> افزودن به سبد خرید</span>
        <BiSolidShoppingBagAlt className="text-lg"></BiSolidShoppingBagAlt>
      </button>
    </div>
  );
};

export default FastFoodCard;
