import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import ProductList from "./ProductList/ProductList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.jpg";

function App() {
  //STATES
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  //Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //fetch category
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // handle search
  const [searchItem, setSearchItem] = useState("");

  const filteredBySearchProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const searchHandle = () => {
    setProducts(filteredBySearchProduct);
  };
  useEffect(() => {
    searchHandle();
  }, [searchItem]);

  //handle filter by category
  const filterItem = (category) => {
    if (category === "All products") {
      setProducts(products);
    } else {
      const filteredByCategory = products.filter(
        (item) => item.category === category
      );

      setProducts(filteredByCategory);
      console.log(products);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (products.length === 0) {
      return (
        <div className="mt-5">
          <div
            className=" bg-orange-100 border-r-[5px] border-orange-500 text-orange-700 p-4 rounded-lg"
            role="alert"
          >
            <p>برای کلیدواژه فوق هیچی آیتمی یافت نشد!</p>
          </div>
          <img
            className="w-[500px] h-[400px] mx-auto flex items-center"
            src={notFound}
            alt="not found"
          />
        </div>
      );
    }
    return (
      <div className="">
        <ProductList products={products} loading={loading}></ProductList>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Header></Header>
      <CategoryList
        filterItem={filterItem}
        categories={categories}
        loading={loading}
      >
        <SearchBar
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          setProducts={setProducts}
          filteredBySearchProduct={filteredBySearchProduct}
        ></SearchBar>
      </CategoryList>
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
