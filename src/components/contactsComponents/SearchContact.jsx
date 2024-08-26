import { CiSearch } from "react-icons/ci";

export default function SearchContact({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center border border-purple-200 rounded-full px-4 py-2 w-full max-w-md mt-2 mb-8">
      <CiSearch className="text-purple-400 w-6 h-6" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 outline-none w-full"
        onChange={handleInputChange}
      />
    </div>
  );
}
