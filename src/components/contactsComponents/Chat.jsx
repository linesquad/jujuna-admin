export default function Chat({ contact }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-end overflow-y-auto p-4 space-y-4">
        {contact ? (
          contact.messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-center space-x-2 ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender !== "You" && (
                <img
                  src={contact.image}
                  alt="img"
                  className="w-10 h-10 rounded-full"
                />
              )}

              <div className="max-w-xs p-1 px-4 text-white rounded-3xl bg-blue-500">
                <p>{message.text}</p>
              </div>

              {message.sender === "You" && (
                <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                  <img src="/images/logoIcon.svg" alt="icon" />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Select a contact to start chatting.</p>
        )}
      </div>
    </div>
  );
}
