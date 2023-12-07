import { useEffect, useState } from "react";

interface JobCategory {
  id: number;
  title: string;
  availableJob: number;
  icon: string;
}

const CategoriesJobs = () => {
  const [categories, setCategories] = useState<JobCategory[]>([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data as JobCategory[]);
      });
  }, []);
  return (
    <div className="px-12 py-20">
      <div className="category-title">
        <h2 className="text-4xl font-bold mb-4">
          Top Trending <span className="text-[#00A7AC]"> Categories </span>{" "}
        </h2>
        <p>To choose your trending job dream & to make future bright.</p>
      </div>
      <div className="categories-job grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4 my-8">
        {categories.map((category) => {
          const { id, title, availableJob } = category;
          return (
            <div
              key={id}
              className="single-job border-l-4 border-[#00A7ac] rounded p-4 shadow-lg bg-white mb-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl hover:text-[#00A7ac] cursor-pointer">
                  {title}
                </h3>
                <p className="text-[#00A7ac] font-bold">{availableJob}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesJobs;
