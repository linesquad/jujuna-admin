import { useOutletContext, useParams } from "react-router-dom";
import ChatFooter from "../components/contactsComponents/ChatFooter";
import ChatHeader from "../components/contactsComponents/ChatHeader";
import Chat from "../components/contactsComponents/Chat";
import { useState } from "react";

function Contacts() {
  const { id } = useParams();
  const { contacts } = useOutletContext();

  const [contactsArray, setContactsArray] = useState(contacts);
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  console.log(contacts);
  const handleSendMessage = (text) => {
    if (contact) {
      const newMessage = {
        id: contact.messages.length + 1,
        sender: "You",
        text,
      };

      contact.messages.push(newMessage);
      setContactsArray([...contactsArray]);
    }
  };

  return (
    <div className="relative flex flex-col h-full justify-between w-[600px] -ml-4 mr-4 bg-white rounded-2xl border-[3px] border-purple-300 overflow-hidden">
      {contact ? (
        <>
          <ChatHeader contact={contact} />
          <div className="flex-1 p-4 max-h-[680px] overflow-y-auto">
            <Chat contact={contact} />
          </div>
          <ChatFooter onSendMessage={handleSendMessage} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contacts;
