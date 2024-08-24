import { FaSearch } from "react-icons/fa";

function ProductsHeader({ type, searchItems, setSearchItems }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[14px] text-[#613994] flex items-center gap-[16px] py-[14px] px-[32px] border-[1px] border-[#BB8DF580] w-[176px] rounded-[15px]">
        <span>+</span>
        <p>Add {type}</p>
      </div>

      <div className="w-[291px] h-[42px] border-[1px] border-[#CCC2DC] rounded-[15px] pl-[12px] flex items-center gap-[11px]">
        <FaSearch size={20} color="#CCC2DC" />
        <input
          type="text"
          placeholder={`Search ${type}`}
          className="border-none outline-none"
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProductsHeader;
