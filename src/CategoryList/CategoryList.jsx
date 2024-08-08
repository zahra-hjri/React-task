import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };
    fetchcategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <ul className="flex gap-8 items-center h-full text-[12px] mx-16 font-bold">
        <li>
          <a href="#">همه فست فودها</a>
        </li>
        {categories.map((category) => (
          <li
            className="text-black py-2 hover:text-orange-500 cursor-pointer"
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="container !mt-[-30px]">
      <div className=" bg-white rounded-[5px] shadow-lg h-[60px]">
        {renderContent()}
      </div>
    </nav>
  );
};
export default CategoryList;
