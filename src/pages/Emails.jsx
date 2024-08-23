import EmailsNavigation from "../components/emailsComponents/EmailsNavigation";
import EmailInbox from "../components/emailsComponents/inboxComponents/EmailInbox";

function Emails() {
  return (
    <div>
      <EmailsNavigation />
      <EmailInbox />
    </div>
  );
}

export default Emails;
