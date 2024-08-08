import { useEffect, useState } from "react";
import axios from "../axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchcategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      console.log(categories);
    };
    fetchcategories();
  }, []);
  return (
    <nav className="container !mt-[-30px]">
      <div className=" bg-white rounded-[10px] shadow-lg h-[70px]">
        <ul className="flex gap-10 items-center h-full text-[12px] mx-16 font-bold">
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
      </div>
    </nav>
  );
};
export default CategoryList;
