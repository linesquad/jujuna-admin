import OneEmailFolderTitle from "./OneEmailFolderTitle";
import { FaPaperPlane } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function EmailsNavigation() {
  return (
    <div className="flex items-center gap-[21px]">
      <OneEmailFolderTitle
        icon={<FaPaperPlane color="#613994" size={20} />}
        name="Sent Messages"
        active={false}
      />
      <OneEmailFolderTitle
        icon={<FaInbox color="#fff" size={20} />}
        name="Inbox"
        active={true}
      />
      <OneEmailFolderTitle
        icon={<FaStar color="#613994" size={20} />}
        name="Starred"
        active={false}
      />
      <OneEmailFolderTitle
        icon={<FaPen color="#613994" size={20} />}
        name="Drafts"
        active={false}
      />
    </div>
  );
}

export default EmailsNavigation;
