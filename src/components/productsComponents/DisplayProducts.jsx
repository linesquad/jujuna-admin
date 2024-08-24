import SingleProduct from "./SingleProduct";

function DisplayProducts() {
  return (
    <div className="mt-[45px] flex flex-col gap-[30px] max-h-[700px] overflow-auto scrollbar-thin scrollbar-thumb-[#613994] scrollbar-track-[#D9D9D9]">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </div>
  );
}

export default DisplayProducts;
