import Filter from "./components/Filter";
import Header from "./components/Header";
import JobSlide from "./components/JobSlide";
import { useFilters } from "./context/FilterContext";
import { useJobs } from "./context/JobsContext";

function App() {
  const { filters } = useFilters();

  const { jobs } = useJobs();

  const filteredJobs = jobs.filter((item) =>
    filters.every(
      (filter) =>
        item.languages.includes(filter) ||
        item.role === filter ||
        item.level === filter ||
        item.tools.includes(filter)
    )
  );

  return (
    <main className="bg-primery-100 min-h-screen">
      <Header />
      <div className="px-4 xl:px-44">
        <Filter />
        <div className=" flex flex-col items-center gap-7 xl:gap-0 pt-14">
          {filteredJobs.length > 0
            ? filteredJobs.map((job) => <JobSlide job={job} key={job.id} />)
            : jobs.map((job) => <JobSlide job={job} key={job.id} />)}
        </div>
      </div>
    </main>
  );
}

export default App;
