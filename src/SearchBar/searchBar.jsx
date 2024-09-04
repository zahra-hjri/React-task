import { CiSearch } from "react-icons/ci";
const SearchBar = ({ value, setValue, searchItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchItem(value);
  };
  return (
    <form onSubmit={handleSubmit} className="w-[50%] mx-auto">
      <div className="relative flex gap-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none cursor-pointer">
          <CiSearch className="w-8 h-8 border-gray-300 text-gray-500 " />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent border border-gray-300 text-gray-500 text-sm focus:outline-none rounded-lg block w-full ps-14 p-2.5 "
          placeholder="جستجوی فست فود"
        />
      </div>
    </form>
  );
};

export default SearchBar;
