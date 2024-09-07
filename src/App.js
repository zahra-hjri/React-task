import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/CategoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/FastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.jpg";

function App() {
  //STATES
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  // FETCH
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setFastFoodItems(response.data);
    setLoading(false);
  };
  // FILTER DATA FUNCTION
  const filterItem = (categoryId) => {
    fetchData(categoryId);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [value, setValue] = useState("");

  const searchItem = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `FastFood/search/${term ? "?term=" + term : ""}`
    );
    setFastFoodItems(response.data);
    setLoading(false);
  };
  useEffect(() => {
    searchItem();
  }, []);
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (fastFoodItems.length === 0) {
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
        <FastFoodList fastFoodItems={fastFoodItems}></FastFoodList>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <Header></Header>
      <CategoryList filterItem={filterItem}>
        <SearchBar
          value={value}
          setValue={setValue}
          searchItem={searchItem}
        ></SearchBar>
      </CategoryList>
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
