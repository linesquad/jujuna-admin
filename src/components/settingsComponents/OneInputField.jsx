function OneInputField({
  type,
  placeholder,
  register,
  name,
  required,
  pattern,
  error,
}) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className="w-[300px] h-[37px] pl-[10px] py-[10px] border-[1px] border-[#CCC2DC] rounded-[10px]"
        {...register(`${name}`, {
          required: required,
          pattern: pattern,
        })}
      />
      <span className="text-red-600 text-[14px]">{error}</span>
    </div>
  );
}

export default OneInputField;
