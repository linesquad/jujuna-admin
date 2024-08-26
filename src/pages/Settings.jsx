import AdminInfo from "../components/settingsComponents/AdminInfo";
import ProfileForm from "../components/settingsComponents/ProfileForm";

function Settings() {
  return (
    <div className="w-[900px] bg-[#fff] rounded-[15px] pt-[76px]">
      <AdminInfo />
      <ProfileForm />
    </div>
  );
}

export default Settings;
