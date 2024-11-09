import { useFilters } from "../context/FilterContext";
import closeIco from "/assets/images/icon-remove.svg";

function FilterOption({ name }: { name: string }) {
  const { setFilters } = useFilters();

  return (
    <div className="pl-4 bg-primery-300/20 text-primery-300 font-bold rounded-md flex items-center gap-5">
      {name}
      <button
        onClick={() =>
          setFilters((prev) => [...prev.filter((v) => v !== name)])
        }
        className="flex items-center h-9 px-3 rounded-r-md justify-center bg-primery-300 duration-500 hover:bg-primery-900"
      >
        <img src={closeIco} alt="closeIcon" />
      </button>
    </div>
  );
}

export default FilterOption;
