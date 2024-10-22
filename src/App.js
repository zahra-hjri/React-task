import { useEffect, useState } from "react";
import _ from "lodash";
import "./App.css";
import CategoryList from "./Components/CategoryList";
import Header from "./Components/Header";
import Loading from "./Components/loading";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import notFound from "./assets/images/404.jpg";
import Pagination from "./Components/Pagination";

const itemsPerPage = 6;

const App = () => {
  //STATES
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  //Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
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
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // handle search
  const filteredBySearchProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleSearch = () => {
    setFilteredProducts(filteredBySearchProduct);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleSearch();
  }, [searchItem]);

  //handle filter by category
  const filterItem = (category) => {
    setActiveCategory(category);

    if (category === "All products") {
      setFilteredProducts(products);
    } else {
      const filteredByCategory = products.filter(
        (item) => item.category === category
      );
      setFilteredProducts(filteredByCategory);
    }
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = _.slice(
    filteredProducts,
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (currentProducts.length === 0) {
      return (
        <div className="mt-5">
          <div
            className=" bg-gray-200 border-l-[8px] text-2xl border-gray-500 text-gray-700 p-4 rounded-lg"
            role="alert"
          >
            <p>Not found</p>
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
        <ProductList products={currentProducts} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Header handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
      <CategoryList
        filterItem={filterItem}
        categories={categories}
        activeCategory={activeCategory}
        loading={loading}
        filteredProducts={filteredProducts}
        isOpenMenu={isOpenMenu}
        handleMenu={handleMenu}
      >
        <SearchBar
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          setProducts={setProducts}
          filteredBySearchProduct={filteredBySearchProduct}
        />
      </CategoryList>
      <div className="container">{renderContent()}</div>
    </div>
  );
};

export default App;
