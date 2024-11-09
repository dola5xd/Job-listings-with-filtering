import { useFilters } from "../context/FilterContext";

function Tool({ tool }: { tool: string }) {
  const { setFilters } = useFilters();

  return (
    <span
      className="bg-primery-300/20 py-2 px-4 rounded-md text-primery-300 font-bold cursor-pointer"
      onClick={() =>
        setFilters((prev) => [...prev.filter((v) => v !== tool), tool])
      }
    >
      {tool}
    </span>
  );
}

export default Tool;
