import { useEffect } from "react";
import axios from "../axios";

const CategoryList = () => {
  useEffect(() => {
    const fetchcategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      console.log(response.data);
    };
    fetchcategories();
  }, []);
  return <div>category</div>;
};
export default CategoryList;
