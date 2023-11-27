import Button from "../UI/Button";
import { RightCircleOutlined } from "@ant-design/icons";
import img from "../../assets/logo-job.jpg";
import { useEffect, useState } from "react";

interface JobTypes {
  id: number;
  title: string;
  duration: string;
  salary: string;
  vacancy: number;
  deadline: string;
}

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<JobTypes[]>([]);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data as JobTypes[]);
      });
  }, []);

  return (
    <div className="px-12 py-20 bg-[#F8F8F8]">
      <div className="section-title-features flex justify-between items-center">
        <div className="title">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-[#00A7AC]">Featured</span> Jobs{" "}
            {jobs.length}
          </h2>
          <p>
            To choose your trending job dream & to make future bright.{" "}
            {jobs?.length}
          </p>
        </div>
        <div className="more-explore">
          <Button>Explore More</Button>
        </div>
      </div>
      {/* card jobs */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-4 mb-4">
        {jobs.map((job) => (
          <div className="single-job border-l-4 border-[#00A7ac] rounded p-4 bg-white ">
            <div className="flex items-center gap-6">
              <div>
                <img
                  src={img}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  alt="company logo"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <p>{job.duration}</p>
              </div>
            </div>
            {/* sort desc */}
            <div className="sort-desc p-4 bg-red-50 border-1 border-gray-800 rounded my-5">
              <p className="py-2">
                {" "}
                <span className="text-md font-bold">
                  <RightCircleOutlined /> Salary:
                </span>{" "}
                {job.salary} /Per month{" "}
              </p>
              <p className="py-2">
                <span className="text-md font-bold">
                  <RightCircleOutlined /> Vacancy:
                </span>{" "}
                {job.vacancy} Person (Both){" "}
              </p>
              <p className="py-2">
                {" "}
                <span className="text-md font-bold">
                  {" "}
                  <RightCircleOutlined /> Deadline:
                </span>{" "}
                {job.deadline}{" "}
              </p>
            </div>
            <div>
              <Button>Apply Now</Button>
            </div>
          </div>
        ))}

        {/* ============ */}
      </div>
    </div>
  );
};

export default FeaturedJobs;
