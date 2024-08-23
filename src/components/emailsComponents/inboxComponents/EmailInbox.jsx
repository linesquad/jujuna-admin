import { FaEllipsisH } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SingleInbox from "./SingleInbox";
import { useState } from "react";

const inboxes = [
  {
    email: "ex1@gmail.com",
    name: "Example",
    message: "Thanks a lot!",
    time: "2 hours ago",
  },
  {
    email: "jd@example.com",
    name: "John Doe",
    message: "Can we reschedule?",
    time: "30 minutes ago",
  },
  {
    email: "js@example.com",
    name: "Jane Smith",
    message: "Having login issues.",
    time: "1 hour ago",
  },
  {
    email: "mb@example.com",
    name: "Michael Brown",
    message: "Send me the invoice.",
    time: "3 hours ago",
  },
  {
    email: "ej@example.com",
    name: "Emily Jones",
    message: "Is it available?",
    time: "45 minutes ago",
  },
  {
    email: "dw@example.com",
    name: "David Wilson",
    message: "Great delivery service!",
    time: "2 days ago",
  },
  {
    email: "sd@example.com",
    name: "Sarah Davis",
    message: "How to return?",
    time: "4 hours ago",
  },
  {
    email: "cl@example.com",
    name: "Chris Lee",
    message: "Order question.",
    time: "15 minutes ago",
  },
  {
    email: "om@example.com",
    name: "Olivia Martin",
    message: "Need product details.",
    time: "3 hours ago",
  },
  {
    email: "dm@example.com",
    name: "Daniel Moore",
    message: "Shipping status update?",
    time: "1 day ago",
  },
  {
    email: "lt@example.com",
    name: "Laura Thomas",
    message: "Website suggestion.",
    time: "5 hours ago",
  },
  {
    email: "jj@example.com",
    name: "James Jackson",
    message: "Great support, thanks!",
    time: "1 hour ago",
  },
];

function EmailInbox() {
  const [searchInbox, setSearchInbox] = useState("");

  const filteredInbox = inboxes.filter(
    (inbox) =>
      inbox.name.toLowerCase().includes(searchInbox.toLowerCase()) ||
      inbox.email.toLowerCase().includes(searchInbox.toLowerCase()) ||
      inbox.message.toLowerCase().includes(searchInbox.toLowerCase())
  );

  return (
    <div className="w-full bg-[#fff] pt-[39px] pl-[43px] pr-[15px] pb-[143px] mt-[26px] rounded-[15px]">
      <div className="flex items-center gap-[27px]">
        <FaEllipsisH size={20} color="#848282" />
        <FaRedo size={20} color="#848282" />
      </div>

      <div className="w-full h-[50px] flex items-center rounded-[15px] border-[1px] border-[#CCC2DC] pl-[30px] mt-[28px]">
        <FaSearch size={25} color="#CCC2DC" />
        <input
          type="text"
          className="h-[30px] pl-[15px] border-none outline-none w-full"
          value={searchInbox}
          onChange={(e) => setSearchInbox(e.target.value)}
        />
      </div>

      <div className="mt-[28px] flex flex-col gap-[17px]">
        {filteredInbox.map((item, index) => {
          return <SingleInbox key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default EmailInbox;
