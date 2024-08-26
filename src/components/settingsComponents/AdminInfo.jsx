import profile from "/images/adminProfile.jfif";

function AdminInfo() {
  return (
    <div>
      <div className="pl-[71px] flex items-start gap-[265px]">
        <div className="relative w-[150px] h-[150px]">
          <img
            src={profile}
            alt="admin-profile"
            className="w-full h-full rounded-[50%] object-cover"
          />
          <div className="flex items-center gap-[14px] px-[13px] py-[9px] rounded-[15px] text-[#613994] w-[210px] border-[1px] border-[#BB8DF580] bg-[#fff] absolute bottom-[-10px] right-[-170px]">
            <p>+</p>
            <p>Change Profile Picture</p>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[24px] text-[#613994]">Mariam Tsikarishvili</h2>
          <p className="text-[18px] text-[#908F8F]">Administrator</p>
        </div>
      </div>
      <div className="mt-[50px] flex items-center gap-[18px] px-[27px]">
        <div className="border-[1px] h-[1px] border-[#D9D9D9] w-full"></div>
        <p className="whitespace-nowrap text-[#7C7E87]">Profile Information</p>
        <div className="border-[1px] h-[1px] border-[#D9D9D9] w-full"></div>
      </div>
    </div>
  );
}

export default AdminInfo;
