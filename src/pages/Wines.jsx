import DisplayProducts from "../components/productsComponents/DisplayProducts";
import ProductsHeader from "../components/productsComponents/ProductsHeader";
import useWines from "../hooks/useWines";

function Wines() {
  const { data: wines } = useWines();

  return (
    <div className="w-[900px] bg-[#fff] pt-[53px] px-[20px]">
      <ProductsHeader type="Wine" />
      <DisplayProducts products={wines} />
    </div>
  );
}

export default Wines;
