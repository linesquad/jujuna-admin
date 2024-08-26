import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { PiDotsThreeBold } from "react-icons/pi";

export default function ChatFooter({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center p-4">
      <button className="flex gap-2">
        <PiDotsThreeBold className="text-2xl text-blue-600 cursor-pointer" />
        <CgSmileMouthOpen className="text-2xl text-blue-600 cursor-pointer" />
      </button>
      <input
        type="text"
        placeholder="Text Here"
        className="flex-1 px-4 py-2 mx-2 border border-purple-200 rounded-xl outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <BiSend
        className="text-2xl text-blue-600 cursor-pointer"
        onClick={handleSend}
      />
    </div>
  );
}
