import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/FastFoodList";

function App() {
  //loading
  const [loading, setLoading] = useState(false);
  // fastfood list
  const [fastFoodItems, setFastFoodItems] = useState([]);

  // fetch
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setFastFoodItems(response.data);
    setLoading(false);
  };
  // filter data
  const filterItem = (categoryId) => {
    fetchData(categoryId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <FastFoodList fastFoodItems={fastFoodItems}></FastFoodList>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Header></Header>
      <CategoryList filterItem={filterItem}></CategoryList>
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
