import OneInputField from "./OneInputField";

function ProfileForm() {
  return (
    <form className="flex flex-col px-[90px] mt-[50px]">
      <div className=" flex justify-between">
        <div className="flex flex-col gap-[24px]">
          <OneInputField type="text" placeholder="Name" />
          <OneInputField type="text" placeholder="Surname" />
          <OneInputField type="text" placeholder="Phone" />
          <OneInputField type="text" placeholder="Address" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <OneInputField type="text" placeholder="Language" />
          <OneInputField type="text" placeholder="Gmail" />
          <OneInputField type="text" placeholder="New Password" />
          <OneInputField type="text" placeholder="Repite New Password" />
        </div>
      </div>
      <button className="w-[200px] h-[54px] rounded-[15px] bg-[#613994] mt-[70px] text-[#fff] self-end">
        Save Changes
      </button>
    </form>
  );
}

export default ProfileForm;
