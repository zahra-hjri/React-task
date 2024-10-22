import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ products, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} loading={loading} />
      ))}
    </div>
  );
};

export default ProductList;
