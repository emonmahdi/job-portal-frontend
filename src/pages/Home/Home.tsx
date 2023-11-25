import { Counter } from "../../redux/features/counter/Counter";

const Home = () => {
  return (
    <div>
      <h2>This is Home Page</h2>
      <h1>Welcome to my Job Portal</h1>
      <p className="bg-green-200">Your career go to the next level</p>
      <Counter />
    </div>
  );
};

export default Home;
