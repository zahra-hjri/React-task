const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-10">
      {fastFoodItems.map((fastFoodItem) => (
        <div className="  w-full flex-col " key={fastFoodItem.id}>
          <div>
            <img src={fastFoodItem.imageUrl} alt={fastFoodItem.name} />
          </div>
          <strong>{fastFoodItem.name}</strong>
          <p>{fastFoodItem.ingredients}</p>
          <button className="w-full h-12 bg-green-400 rounded-lg">
            افزودن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  );
};

export default FastFoodList;
