const FastFoodCard = ({ id, imageUrl, name, ingredients, price }) => {
  return (
    <div className="w-full relative flex-col p-4" key={id}>
      <div className="">
        <span className="bg-green-500 absolute top-6 right-6 text-white text-xs font-medium me-2 px-4 py-2">
          {price}
        </span>
        <img src={imageUrl} alt={name} />
      </div>
      <strong>{name}</strong>
      <p>{ingredients}</p>
      <button className="w-full h-12 bg-orange-600 rounded-lg">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default FastFoodCard;
