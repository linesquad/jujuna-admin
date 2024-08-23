function OneEmailFolderTitle({ icon, name, active }) {
  return (
    <div
      className={`w-[210px] h-[60px] rounded-[15px] ${
        active ? "bg-[#613994]" : "bg-[#fff]"
      }  pl-[25px] py-[9px] flex items-center gap-[12px]`}
    >
      {icon}
      <p className={`text-[20px] ${active ? "text-[#fff]" : "text-[#613994]"}`}>
        {name}
      </p>
    </div>
  );
}

export default OneEmailFolderTitle;
