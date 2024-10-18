import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

const CategoryList = ({ filterItem, children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
      console.log(`categories:${categories}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await axios.get("/FoodCategory/categories");
  //     setCategories(response.data);
  //     // setLoading(false);
  //   };
  //   fetchCategories();
  //   console.log(categories);
  // }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else {
      return (
        <ul className="flex items-center gap-8 mx-8 h-full myElement">
          <li
            onClick={() => filterItem()}
            className="text-[12px] font-bold cursor-pointer hover:text-orange-600"
          >
            <p>All products</p>
          </li>
          {categories.map((category) => (
            <li
              className=" text-[12px] font-bold cursor-pointer hover:text-orange-600"
              key={category}
              onClick={() => filterItem(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <nav className="container !mt-[-30px]">
      <div className="bg-white rounded-[5px] shadow-lg h-[60px] flex items-center gap-10">
        {renderContent()}
        {children}
        {/* <SearchBar /> */}
      </div>
    </nav>
  );
};
export default CategoryList;
