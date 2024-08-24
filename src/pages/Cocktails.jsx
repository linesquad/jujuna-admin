import DisplayProducts from "../components/productsComponents/DisplayProducts";
import ProductsHeader from "../components/productsComponents/ProductsHeader";

function Cocktails() {
  return (
    <div className="w-[900px] bg-[#fff] pt-[53px] px-[20px]">
      <ProductsHeader type="Cocktail" />
      <DisplayProducts />
    </div>
  );
}

export default Cocktails;
