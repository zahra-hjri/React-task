import "./header.css";
import { SiShopify } from "react-icons/si";

const Header = () => {
  return (
    <header className=" h-[150px] bg-gray-800 text-white flex justify-between items-center">
      <SiShopify className="h-32 w-32  mx-16" />

      <h2 className="text-white container text-end font-bold tracking-[5px] text-[24px]">
        Online Shopping
      </h2>
    </header>
  );
};
export default Header;
