import { SiShopify } from "react-icons/si";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = ({ handleMenu, isOpenMenu }) => {
  return (
    <header className="h-[150px] bg-gray-800 text-white flex justify-between items-center">
      <SiShopify className="h-24 w-24 lg:h-32 lg:w-32 mx-16" />
      <h2 className="hidden lg:block text-white container text-end font-bold tracking-[5px] text-[24px]">
        Online Shopping
      </h2>
      <div onClick={handleMenu}>
        {isOpenMenu ? (
          <RxCross2 className="block cursor-pointer text-5xl lg:hidden me-10" />
        ) : (
          <IoIosMenu className="block cursor-pointer text-5xl lg:hidden me-10" />
        )}
      </div>
    </header>
  );
};
export default Header;
