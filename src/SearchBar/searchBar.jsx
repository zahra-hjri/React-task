import { CiSearch } from "react-icons/ci";
const SearchBar = ({ value, setValue, searchItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchItem(value);
  };
  const handleChange = (e) => {
    searchItem(value);
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="w-[25%] mx-auto">
      <div className="relative flex gap-5">
        <div
          onClick={handleSubmit}
          className="absolute inset-y-0 start-0 flex items-center ps-3.5 cursor-pointer"
        >
          <CiSearch className="w-8 h-8 border-gray-300 text-gray-500" />
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="bg-transparent border border-gray-300 text-gray-500 text-sm focus:outline-none rounded-lg block w-full ps-12 p-2.5 "
          placeholder="search ..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
