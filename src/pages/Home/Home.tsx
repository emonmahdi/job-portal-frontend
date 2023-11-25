import Banner from "../../components/home/Banner";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
// import { Counter } from "../../redux/features/counter/Counter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
