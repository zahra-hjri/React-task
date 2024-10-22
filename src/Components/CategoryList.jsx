import Loading from "./loading";
import { RxCross2 } from "react-icons/rx";

const CategoryList = ({
  categories,
  filterItem,
  children,
  loading,
  filteredProducts,
  activeCategory,
  isOpenMenu,
  handleMenu,
}) => {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="hidden mx-10 lg:block">
          <Loading />
        </div>
      );
    } else {
      return (
        <>
          {isOpenMenu ? (
            <ul className="fixed left-[50%] top-0 bg-gray-800 z-50 w-full h-screen flex-col text-white">
              <div onClick={handleMenu} className="flex justify-end w-1/2">
                <RxCross2 className="block cursor-pointer text-5xl lg:hidden me-5 mt-5 text-white" />
              </div>
              <li
                onClick={() => filterItem("All products")}
                className={`text-[14px] cursor-pointer flex items-center justify-center w-1/2  rounded-lg mt-10 
              ${activeCategory === "All products" ? "" : ""}`}
              >
                <strong className="py-1.5 px-2">All products</strong>
                <span
                  className={`${
                    activeCategory === "All products" ? "bg-white" : ""
                  } text-[11px] text-gray-800 rounded-full h-6 w-6 flex justify-center items-center`}
                >
                  {activeCategory === "All products" && filteredProducts.length}
                </span>
              </li>
              {categories.map((category) => (
                <li
                  className={`text-[14px] cursor-pointer py-1.5 mt-10 flex items-center justify-center w-1/2 px-2 ${
                    activeCategory === category
                      ? "bg-gray-800 text-white rounded-lg   "
                      : "hover:border-[1px] border-gray-800 rounded-lg"
                  } `}
                  key={category}
                  onClick={() => filterItem(category)}
                >
                  <strong className="py-0.5 px-2">{category}</strong>
                  <span
                    className={`${
                      activeCategory === category ? "bg-white" : ""
                    } text-[12px] text-gray-900 rounded-full h-6 w-6 flex justify-center items-center`}
                  >
                    {activeCategory === category && filteredProducts.length}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <ul
              className={`hidden lg:flex items-center gap-5 ms-5 h-full ${
                isOpenMenu ? "" : ""
              }`}
            >
              <li
                onClick={() => filterItem("All products")}
                className={`text-[10px] font-bold cursor-pointer flex items-center px-2 py-0.5 rounded-lg 
              ${
                activeCategory === "All products"
                  ? "bg-gray-800 text-white"
                  : "hover:border-[1px] border-gray-800 rounded-lg"
              }`}
              >
                <strong className="py-1.5 px-2">All products</strong>
                <span className="bg-white text-[10px] text-gray-900 rounded-full h-6 w-6 flex justify-center items-center">
                  {activeCategory === "All products" && filteredProducts.length}
                </span>
              </li>
              {categories.map((category) => (
                <li
                  className={`text-[10px] cursor-pointer py-1.5 flex items-center justify-center px-2 ${
                    activeCategory === category
                      ? "bg-gray-800 text-white rounded-lg   "
                      : "hover:border-[1px] border-gray-800 rounded-lg"
                  } `}
                  key={category}
                  onClick={() => filterItem(category)}
                >
                  <strong className="py-0.5 px-2">{category}</strong>
                  <span className="bg-white text-[10px] text-gray-900 rounded-full h-6 w-6 flex justify-center items-center">
                    {activeCategory === category && filteredProducts.length}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      );
    }
  };

  return (
    <nav className="container !mt-[-30px]">
      <div className="bg-white rounded-[5px] shadow-lg h-[60px] flex items-center gap-5">
        {renderContent()}
        {children}
      </div>
    </nav>
  );
};
export default CategoryList;
