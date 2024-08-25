export default function SingleContact({ image, name, number, status }) {
  return (
    <div className="flex items-center justify-between mt-2 cursor-pointer hover:bg-gray-100 pr-2 rounded-full">
      <div className="flex items-center gap-2 relative">
        <div className="rounded-full overflow-hidden bg-red-200 w-[70px] h-[70px]">
          <img src={image} alt="contact" />
          <div
            className={` w-[15px] h-[15px] rounded-full absolute top-0 left-[50px] ${
              status === "Active now" ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        </div>
        <div>
          <p className="text-sm">{name}</p>
          <span className="text-gray-400 text-sm">{number}</span>
        </div>
      </div>
      <span className="text-gray-400 text-xs">{status}</span>
    </div>
  );
}
