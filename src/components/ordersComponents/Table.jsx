import SingleOrder from "./SignleOrder";

export default function Table({ data }) {
  return (
    <div className="container mx-auto p-4 text-black">
      <div className="grid grid-cols-[60px,2fr,120px,110px,84px,130px,40px] gap-4 border-b-2 pb-2 pl-2 font-medium">
        <div>№</div>
        <div>Product</div>
        <div>Date</div>
        <div>Status</div>
        <div>Price</div>
        <div>Customer</div>
        <div></div>
      </div>

      {data.map((order) => (
        <SingleOrder key={order.id} order={order} />
      ))}
    </div>
  );
}
