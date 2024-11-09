import { createContext, ReactElement, useContext, useState } from "react";
import data from "../lib/data.json";

const jobsContext = createContext<JobsContextType | undefined>(undefined);

export type jobTypes = {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type JobsContextType = {
  jobs: jobTypes[];
  setJobs: React.Dispatch<React.SetStateAction<jobTypes[]>>;
};

function JobsProvider({ children }: { children: ReactElement }) {
  const [jobs, setJobs] = useState<jobTypes[]>(data);

  return (
    <jobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </jobsContext.Provider>
  );
}

function useJobs() {
  const context = useContext(jobsContext);
  if (!context) throw new Error("Context is outside provider!");
  return context;
}

export { JobsProvider, useJobs };
