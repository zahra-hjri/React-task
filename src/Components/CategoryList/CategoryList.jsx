import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

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
  return (
    <nav className="container !mt-[-30px]">
      <div className="bg-white rounded-[5px] shadow-lg h-[60px] flex items-center gap-5">
        <>
          {isOpenMenu ? (
            <MobileMenu
              categories={categories}
              handleMenu={handleMenu}
              filteredProducts={filteredProducts}
              filterItem={filterItem}
              activeCategory={activeCategory}
            />
          ) : (
            <DesktopMenu
              categories={categories}
              handleMenu={categories}
              filteredProducts={filteredProducts}
              filterItem={filterItem}
              activeCategory={activeCategory}
              isOpenMenu={isOpenMenu}
              loading={loading}
            />
          )}
        </>
        {children}
      </div>
    </nav>
  );
};
export default CategoryList;
