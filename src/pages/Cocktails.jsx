import { useState } from "react";
import DisplayProducts from "../components/productsComponents/DisplayProducts";
import ProductsHeader from "../components/productsComponents/ProductsHeader";
import useCocktails from "../hooks/useCocktails";

function Cocktails() {
  const { data: cocktails } = useCocktails();
  const [searchCoktails, setSearchCocktails] = useState("");

  const fillteredCocktails = cocktails?.filter((cocktail) =>
    cocktail.name.en.toLowerCase().startsWith(searchCoktails.toLowerCase())
  );

  return (
    <div className="w-[900px] bg-[#fff] pt-[53px] px-[20px]">
      <ProductsHeader
        type="Cocktail"
        searchItems={searchCoktails}
        setSearchItems={setSearchCocktails}
      />
      <DisplayProducts products={fillteredCocktails} />
    </div>
  );
}

export default Cocktails;
