import notFound from "../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div className="mt-5">
      <div
        className="bg-gray-200 border-l-[8px] text-2xl border-gray-500 text-gray-700 p-4 rounded-lg"
        role="alert"
      >
        <p>Not found</p>
      </div>
      <img
        className="w-[500px] h-[400px] mx-auto flex items-center"
        src={notFound}
        alt="not found"
      />
    </div>
  );
};

export default NotFound;
