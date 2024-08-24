import cocktail from "/images/cocktail.jfif";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

function SingleProduct() {
  return (
    <div className="flex">
      <div className="flex items-center gap-[20px] w-[300px] border-y-[1px] border-r-[1px] border-[#BB8DF580]">
        <img
          src={cocktail}
          alt="cocktail"
          className="w-[100px] h-[100px] object-cover"
        />
        <div className="flex flex-col gap-[24px] text-[18px]">
          <p>Cocktail</p>
          <p className="text-[#848282]">Price</p>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] text-[18px] pl-[20px] justify-center w-[200px] border-y-[1px] border-r-[1px] border-[#BB8DF580]">
        <p>Rating</p>
        <div className="flex">
          <FaStar color="#613994" />
          <FaStar color="#613994" />
          <FaRegStar color="#613994" />
          <FaRegStar color="#613994" />
          <FaRegStar color="#613994" />
        </div>
      </div>

      <div className="px-[20px] flex flex-col justify-center gap-[30px] w-[300px] border-y-[1px] border-r-[1px] border-[#BB8DF580]">
        <div className="flex items-center justify-between">
          <p>Sold/Quantity</p>
          <FaEllipsisH color="#848282" />
        </div>
        <div>
          <ProgressBar progress={45} max={180} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
