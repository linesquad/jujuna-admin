import DisplayProducts from "../components/productsComponents/DisplayProducts";
import ProductsHeader from "../components/productsComponents/ProductsHeader";
import useCocktails from "../hooks/useCocktails";

function Cocktails() {
  const { data: cocktails } = useCocktails();

  return (
    <div className="w-[900px] bg-[#fff] pt-[53px] px-[20px]">
      <ProductsHeader type="Cocktail" />
      <DisplayProducts products={cocktails} />
    </div>
  );
}

export default Cocktails;
