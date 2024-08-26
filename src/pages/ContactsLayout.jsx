import { useState } from "react";
import SearchContact from "../components/contactsComponents/SearchContact";
import SingleContact from "../components/contactsComponents/SingleContact";
import { Outlet } from "react-router-dom";

const contacts = [
  {
    image: "/images/contact.png",
    name: "Salome Shukakidze",
    number: "+123 456 789",
    status: "Active now",
    id: 1,
    messages: [
      { id: 1, sender: "Salome", text: "Hi there!" },
      { id: 2, sender: "You", text: "Thank you For Your Attention!" },
    ],
  },
  {
    image: "/images/contact.png",
    name: "Nanuka Grdzelishvili",
    number: "+123 456 789",
    status: "Active now",
    id: 2,
    messages: [
      { id: 1, sender: "Nanuka", text: "How are you?" },
      { id: 2, sender: "You", text: "I'm good, thanks!" },
    ],
  },
  {
    image: "/images/contact.png",
    name: "Davit Avtandilashvili",
    number: "+123 456 789",
    status: "5 min ago",
    id: 3,
    messages: [],
  },
  {
    image: "/images/contact.png",
    name: "Nugo bibilashvili",
    number: "+123 456 789",
    status: "Active now",
    id: 4,
    messages: [],
  },
  {
    image: "/images/contact.png",
    name: "Rezi Karanadze",
    number: "+123 456 789",
    status: "10 min ago",
    id: 5,
    messages: [],
  },
];

export default function ContactsLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContactId, setSelectedContactId] = useState(1);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectContact = (id) => {
    setSelectedContactId(id);
  };

  return (
    <div className="flex justify-end w-[78%]">
      <Outlet context={{ contacts: contacts }} />
      <div className="bg-white p-4 border-[3px] border-purple-300 rounded-2xl w-[333px]">
        <SearchContact onSearch={(query) => setSearchQuery(query)} />
        <div className="h-[700px] overflow-y-auto">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <SingleContact
                key={contact.id}
                contact={contact}
                isSelected={contact.id === selectedContactId}
                onClick={() => handleSelectContact(contact.id)}
              />
            ))
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
