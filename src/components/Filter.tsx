import { useFilters } from "../context/FilterContext";
import FilterOption from "./FilterOption";

function Filter() {
  const { filters, setFilters } = useFilters();
  if (filters.length === 0) return;
  return (
    <div className="bg-primery-100 -translate-y-1/2 py-4 px-5 xl:px-20 shadow-xl rounded-md flex items-center gap-10 justify-between text-xl">
      <div className="flex flex-wrap xl:flex-nowrap items-center gap-4">
        {filters.map((filter) => (
          <FilterOption name={filter} key={filter} />
        ))}
      </div>
      <button
        className="underline text-primery-300"
        onClick={() => setFilters([])}
      >
        Clear
      </button>
    </div>
  );
}

export default Filter;
