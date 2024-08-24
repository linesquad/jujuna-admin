import { useEffect, useState } from "react";

function FilterDropdown({ onFilter, onRemoveFilters, activeFilters }) {
  const [filters, setFilters] = useState({
    date: "",
    status: "",
    price: "",
  });

  useEffect(() => {
    setFilters(activeFilters);
  }, [activeFilters]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleApplyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="absolute top-20 -right-28 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-10">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sort by Date</label>
        <select
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Select</option>
          <option value="asc">Oldest to newest</option>
          <option value="desc">Newest to oldest</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">All</option>
          <option value="Processing">Processing</option>
          <option value="Declined">Declined</option>
          <option value="Received">Received</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sort by Price</label>
        <select
          name="price"
          value={filters.price}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="">Select</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <button
        onClick={handleApplyFilter}
        className="bg-purple-500 text-white px-4 py-2 rounded w-full"
      >
        Apply Filter
      </button>
      <button
        onClick={onRemoveFilters}
        className="bg-red-500 text-white px-4 py-2 mt-2 rounded w-full"
      >
        Remove Filters
      </button>
    </div>
  );
}

export default FilterDropdown;
