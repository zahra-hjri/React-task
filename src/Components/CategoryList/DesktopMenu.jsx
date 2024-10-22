import Loading from "../Loading";

const DesktopMenu = ({
  categories,
  filteredProducts,
  filterItem,
  activeCategory,
  isOpenMenu,
  loading,
}) => {
  if (loading) {
    return <Loading />;
  }
  return (
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
  );
};

export default DesktopMenu;
