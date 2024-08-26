import { IoCloseOutline } from "react-icons/io5";

export default function ChatHeader({ contact }) {
  return (
    <div className="w-[550px] p-4">
      <IoCloseOutline className="w-8 h-8 text-gray-500 absolute top-2 right-2 cursor-pointer" />
      <div className="flex justify-between items-center">
        <div className="relative flex items-center gap-2">
          <div className="rounded-full overflow-hidden bg-red-200 w-[70px] h-[70px]">
            <img src={contact.image} alt="contact" />
            <div
              className={`w-[15px] h-[15px] rounded-full absolute top-0 left-[50px] ${
                contact.status === "Active now" ? "bg-green-500" : "bg-gray-400"
              }`}
            ></div>
          </div>
          <div>
            <p className="text-sm">{contact.name}</p>
            <p className="text-gray-400 text-sm">{contact.number}</p>
            <p className="text-gray-400 text-xs">{contact.status}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="bg-gray-200 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
            <img src="/images/penIcon.svg" alt="pen" />
          </div>
          <div className="bg-gray-200 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
            <img src="/images/phoneIcon.svg" alt="phone" />
          </div>
          <div className="bg-gray-200 rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
            <img src="/images/emailIcon.svg" alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
}
