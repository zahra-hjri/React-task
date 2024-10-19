const Paginating = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination flex gap-5 my-10 justify-center items-center ">
      <button
        className="bg-gray-400 text-white rounded-lg p-2 w-32 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page{" "}
        <spsn className="border-gray-500 border-[1px] rounded-full px-2">
          {currentPage}
        </spsn>{" "}
        of{" "}
        <span className="border-gray-500 border-[1px] rounded-full px-2">
          {totalPages}
        </span>
      </span>
      <button
        className="bg-gray-400 text-white rounded-lg p-2 w-32 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Paginating;
