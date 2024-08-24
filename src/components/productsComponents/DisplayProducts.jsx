import SingleProduct from "./SingleProduct";

function DisplayProducts({ products }) {
  return (
    <div className="mt-[45px] flex flex-col gap-[30px] max-h-[700px] overflow-auto scrollbar-thin scrollbar-thumb-[#613994] scrollbar-track-[#D9D9D9]">
      {products?.map((item) => {
        return <SingleProduct key={item.id} item={item} />;
      })}
    </div>
  );
}

export default DisplayProducts;
