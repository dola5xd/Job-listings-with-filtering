import { createContext, ReactElement, useContext, useState } from "react";

type filterState = {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterContext = createContext<filterState | null>(null);
function FilterProvider({ children }: { children: ReactElement }) {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
function useFilters() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("Context is outside provider!");
  return context;
}
export { FilterProvider, useFilters };
