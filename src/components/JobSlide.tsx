import { jobTypes } from "../context/JobsContext";
import Tool from "./Tool";

function JobSlide({ job }: { job: jobTypes }) {
  const {
    company,
    contract,
    featured,
    postedAt,
    languages,
    tools,
    role,
    level,
    location,
    position,
    logo,
    isNew,
  } = job;

  const toolsFeatures = [...languages, ...tools, role, level];

  return (
    <div className="container mb-10 relative flex flex-col xl:flex-row xl:items-center justify-between shadow-2xl py-7 px-7 rounded-lg shadow-primery-300/40 xl:before:w-1 xl:before:duration-500 xl:before:h-full hover:xl:before:bg-primery-300 xl:before:content-[''] xl:before:absolute xl:before:left-0 bg-white gap-5 xl:gap-0 pt-16 xl:pt-7 -translate-y-7">
      <div className="flex items-center gap-7">
        <div className="absolute -top-7 left-0 translate-x-4 -translate-y-4 xl:static xl:translate-x-0 xl:translate-y-0">
          <img src={logo} alt={company} />
        </div>
        <div className="flex flex-col gap-2 xl:gap-1">
          <h3 className="flex items-center gap-2 sm:gap-4 [&>span]:text-primery-100 sm:[&>span]:px-4 text-sm sm:text-lg [&>span]:px-2  [&>span]:rounded-xl font-bold">
            {company}
            {isNew && <span className="bg-primery-300">New</span>}
            {featured && <span className="bg-primery-900">featured</span>}
          </h3>
          <h1 className="font-bold text-primery-900 text-xl xl:text-2xl">
            {position}
          </h1>
          <div className="flex items-center gap-3 xl:gap-4 [&>span]:block [&>span]:bg-primery-900 [&>span]:w-1 [&>span]:rounded-full [&>span]:h-1 [&>h5]:text-sm xl:[&>h5]:text-xl">
            <h5>{postedAt}</h5>
            <span></span>
            <h5>{contract}</h5>
            <span></span>
            <h5>{location}</h5>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap xl:gap-4 xl:flex-nowrap">
        {toolsFeatures.map((tool, i) => (
          <Tool tool={tool} key={i} />
        ))}
      </div>
    </div>
  );
}

export default JobSlide;
