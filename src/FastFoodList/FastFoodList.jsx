import FastFoodCard from "../FastFoodCard/fastFoodCard";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-10">
      {fastFoodItems.map((fastFoodItem) => (
        <FastFoodCard {...fastFoodItem} key={fastFoodItem.id}></FastFoodCard>
      ))}
    </div>
  );
};

export default FastFoodList;
