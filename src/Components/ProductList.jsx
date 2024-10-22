import NotFound from "./NotFound";
import ProductCard from "./ProductCard/ProductCard";
import Loading from "./Loading";

const ProductList = ({ products, loading }) => {
  if (loading) {
    return <Loading />;
  }
  if (products.length === 0) {
    return <NotFound />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {products.map((product) => (
        <ProductCard {...product} key={product.id} loading={loading} />
      ))}
    </div>
  );
};

export default ProductList;
