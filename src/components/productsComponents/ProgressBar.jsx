function ProgressBar({ progress, max }) {
  const progressPercentage = (progress / max) * 100;
  return (
    <div className="flex items-center gap-[20px]">
      <div className="w-full h-[5px] bg-[#e0e0df] rounded-[5px]">
        <div
          className={`h-full bg-[#BA92ED] rounded-[5px]`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span>
        {progress}/{max}
      </span>
    </div>
  );
}

export default ProgressBar;
