import { useState } from "react";
import DisplayProducts from "../components/productsComponents/DisplayProducts";
import ProductsHeader from "../components/productsComponents/ProductsHeader";
import useWines from "../hooks/useWines";

function Wines() {
  const { data: wines } = useWines();
  const [searchWines, setSearchWines] = useState("");

  const fillteredWines = wines?.filter((wine) =>
    wine.name.en.toLowerCase().startsWith(searchWines.toLowerCase())
  );

  return (
    <div className="w-[900px] bg-[#fff] pt-[53px] px-[20px]">
      <ProductsHeader
        type="Wine"
        searchItems={searchWines}
        setSearchItems={setSearchWines}
      />
      <DisplayProducts products={fillteredWines} />
    </div>
  );
}

export default Wines;
