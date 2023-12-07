import { useEffect, useState } from "react";
import Navbar from "../../components/shared/Navbar";

interface JobTypes {
  id: number;
  title: string;
  duration: string;
  salary: string;
  vacancy: number;
  deadline: string;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<JobTypes[]>([]);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data as JobTypes[]);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="top-banner-job bg-slate-100 py-10 text-center">
          <h2 className="text-[#00A7AC] font-bold text-2xl">
            All JOBS - {jobs.length}{" "}
          </h2>
        </div>
        <div className="jobs-body px-12 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="sm:col-span-1 bg-gray-200 p-4">
              {/* Job Category */}
              <div className="job-category-type bg-white p-4 border-1 border-solid border-gray-400 rounded-lg mb-4">
                <h3 className="text-md font-bold mb-2">Job Categories</h3>
                <p>
                  {" "}
                  <input type="radio" name="category" /> Technical
                </p>
                <p>
                  {" "}
                  <input type="radio" name="category" /> Development
                </p>
                <p>
                  {" "}
                  <input type="radio" name="category" /> Bank Job
                </p>
                <p>
                  {" "}
                  <input type="radio" name="category" /> Accounting
                </p>
                <p>
                  {" "}
                  <input type="radio" name="category" /> Sales and Marketing
                </p>
              </div>
              {/* Job Category */}
              <div className="job-type bg-white p-4 border-1 border-solid border-gray-400 rounded-lg mb-4">
                <h3 className="text-md font-bold mb-2">Job Type</h3>
                <p>
                  {" "}
                  <input type="radio" name="job-type" /> Full Time
                </p>
                <p>
                  {" "}
                  <input type="radio" name="job-type" /> Part Time
                </p>
                <p>
                  {" "}
                  <input type="radio" name="job-type" /> Remote
                </p>
                <p>
                  {" "}
                  <input type="radio" name="job-type" /> Internship
                </p>
              </div>
            </div>
            {/* Job details  */}
            <div className="sm:col-span-2 bg-gray-300 p-4">
              <div className="single-job-card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
