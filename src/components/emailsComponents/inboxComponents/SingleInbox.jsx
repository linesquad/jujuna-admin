import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function SingleInbox({ item }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isStared, setIsStared] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-[60px]">
        <div className="flex items-center gap-[8px]">
          <div
            className="w-[24px] h-[24px] rounded-[3px] border-[1px] border-[#BB8DF580] flex items-center justify-center cursor-pointer"
            onClick={() => setIsChecked((check) => !check)}
          >
            {isChecked && <FaCheck color="#613994" />}
          </div>
          {!isStared ? (
            <FaRegStar
              size={20}
              color="#613994"
              onClick={() => setIsStared(true)}
              cursor="pointer"
            />
          ) : (
            <FaStar
              size={20}
              color="#613994"
              onClick={() => setIsStared(false)}
              cursor="pointer"
            />
          )}
        </div>

        <p className="text-[16px] text-[#613994]">{item.email}</p>
      </div>

      <div className="flex gap-[100px]">
        <p className="text-[16px] text-[#848282]">
          <span className="text-[16px] text-[#613994]">{item.name}: </span>
          {item.message}
        </p>
        <p className="text-[13px] text-[#848282]">2 hour ago</p>
      </div>
    </div>
  );
}

export default SingleInbox;
