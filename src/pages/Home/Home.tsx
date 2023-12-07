import Banner from "../../components/home/Banner";
import CategoriesJobs from "../../components/home/CategoriesJobs";
import FeaturedJobs from "../../components/home/FeaturedJobs";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
// import { Counter } from "../../redux/features/counter/Counter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CategoriesJobs />
      <FeaturedJobs />
      <Footer />
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
