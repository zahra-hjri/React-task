import Loading from "../Loading/loading";

const CategoryList = ({ categories, filterItem, children, loading }) => {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="mx-10">
          <Loading />
        </div>
      );
    } else {
      return (
        <ul className="flex items-center gap-8 mx-8 h-full myElement">
          <li
            onClick={() => filterItem("All products")}
            className="text-[12px] font-bold cursor-pointer hover:text-green-800"
          >
            <p className="bg-gray-800 text-white rounded-lg px-3 py-1.5">
              All products
            </p>
          </li>
          {categories.map((category) => (
            <li
              className=" text-[12px] font-bold cursor-pointer hover:text-green-600"
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
      </div>
    </nav>
  );
};
export default CategoryList;
