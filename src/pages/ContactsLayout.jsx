import { useState } from "react";
import SearchContact from "../components/contactsComponents/SearchContact";
import SingleContact from "../components/contactsComponents/SingleContact";

const contacts = [
  {
    image: "/images/contact.png",
    name: "Salome Shukakidze",
    number: "+123 456 789",
    status: "Active now",
    id: 1,
  },
  {
    image: "/images/contact.png",
    name: "Nanuka Grdzelishvili",
    number: "+123 456 789",
    status: "Active now",
    id: 2,
  },
  {
    image: "/images/contact.png",
    name: "Davit Avtandilashvili",
    number: "+123 456 789",
    status: "5 min ago",
    id: 3,
  },
  {
    image: "/images/contact.png",
    name: "Nugo bibilashvili",
    number: "+123 456 789",
    status: "Active now",
    id: 4,
  },
  {
    image: "/images/contact.png",
    name: "Rezi Karanadze",
    number: "+123 456 789",
    status: "10 min ago",
    id: 5,
  },
];

export default function ContactsLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-end w-[78%]">
      <div className="bg-white p-4 border-[3px] border-purple-300 rounded-2xl w-[333px]">
        <SearchContact onSearch={(query) => setSearchQuery(query)} />
        <div className="h-[700px] overflow-y-auto">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <SingleContact
                key={contact.id}
                image={contact.image}
                name={contact.name}
                number={contact.number}
                status={contact.status}
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
