import FastFoodCard from "../FastFoodCard/fastFoodCard";

const FastFoodList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {products.map((product) => (
        <FastFoodCard {...product} key={product.id}></FastFoodCard>
      ))}
    </div>
  );
};

export default FastFoodList;
