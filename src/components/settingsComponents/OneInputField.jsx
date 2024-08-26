function OneInputField({ type, placeholder }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[300px] h-[37px] pl-[10px] py-[10px] border-[1px] border-[#CCC2DC] rounded-[10px]"
      />
    </div>
  );
}

export default OneInputField;
