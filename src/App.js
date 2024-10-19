import { useEffect, useState } from "react";
import _ from "lodash"; // Import Lodash
import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import ProductList from "./ProductList/ProductList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.jpg";
import Paginating from "./Paginating/Paginating";

function App() {
  //STATES
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); // برای ذخیره لیست اصلی محصولات
  const [filteredProducts, setFilteredProducts] = useState([]); // برای ذخیره محصولات فیلتر شده
  const [activeCategory, setActiveCategory] = useState("All products"); // دسته‌بندی فعال
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  // صفحه‌بندی
  const [currentPage, setCurrentPage] = useState(1); // شماره صفحه فعلی
  const itemsPerPage = 6; // تعداد محصولات در هر صفحه

  //Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); // ذخیره محصولات اصلی
      setFilteredProducts(data); // ابتدا همه محصولات را نمایش می‌دهیم
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
      console.error("Error fetching categories:", error);
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

  const handleSearch = () => {
    setFilteredProducts(filteredBySearchProduct); // محصولات فیلتر شده بر اساس جستجو را به‌روزرسانی می‌کنیم
    setCurrentPage(1); // بازنشانی به صفحه اول
  };

  useEffect(() => {
    handleSearch();
  }, [searchItem]);

  //handle filter by category
  const filterItem = (category) => {
    setActiveCategory(category); // تنظیم دسته‌بندی فعال

    if (category === "All products") {
      setFilteredProducts(products); // اگر همه محصولات را می‌خواهیم، لیست اصلی را برمی‌گردانیم
    } else {
      const filteredByCategory = products.filter(
        (item) => item.category === category
      );
      setFilteredProducts(filteredByCategory); // محصولات فیلتر شده بر اساس دسته‌بندی
    }
    setCurrentPage(1); // بازنشانی به صفحه اول
  };

  // محاسبه محصولات صفحه فعلی
  const indexOfLastProduct = currentPage * itemsPerPage; // آخرین ایندکس
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage; // اولین ایندکس
  const currentProducts = _.slice(
    filteredProducts,
    indexOfFirstProduct,
    indexOfLastProduct
  ); // محصولات صفحه فعلی

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // تعداد صفحات

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
        <ProductList products={currentProducts} loading={loading}></ProductList>
        {/* Pagination Buttons*/}
        <Paginating
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Header handleMenu={handleMenu} isOpenMenu={isOpenMenu}></Header>
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
        ></SearchBar>
      </CategoryList>
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
