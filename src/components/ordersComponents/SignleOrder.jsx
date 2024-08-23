import { BsThreeDots } from "react-icons/bs";

export default function SingleOrder({ order }) {
  return (
    <div className="grid grid-cols-[50px,2fr,1fr,1fr,80px,1fr,40px] gap-4 items-center py-4 px-2 border-b">
      <div>{order.id}</div>
      <div className="flex items-center space-x-2">
        <img src={order.image} alt="Product" className="w-8 h-8 object-cover" />
        <span>{order.product}</span>
      </div>
      <div>{order.date}</div>
      <div>
        <span
          className={`font-medium ${
            order.status === "Declined"
              ? "text-red-500 border border-red-500 p-2 px-4 rounded-xl text-xs"
              : order.status === "Processing"
              ? "text-purple-500 border border-purple-500 p-2 px-[12px] rounded-xl text-xs"
              : order.status === "Received"
              ? "text-green-500 border border-green-500 p-2 px-[16px] rounded-xl text-xs"
              : ""
          }`}
        >
          {order.status}
        </span>
      </div>
      <div>{order.price}</div>
      <div>{order.customer}</div>
      <div className="flex justify-center">
        <button className="cursor-pointer">
          <BsThreeDots className="text-gray-500 w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
