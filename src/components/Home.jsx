import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center mt-0 px-4 max-w-[960px] min-w-[320px] text-center mx-auto bg-[url(/home_background1.jpg)] bg-cover">
      <h2 className="bg-white text-green-700 text-3xl md:text-4xl p-5 pb-7 font-medium mx-auto absolute top-[90px] left-0 right-0 max-w-[540px] sm:max-w-[480px] rounded-lg">
        Get your meal on time!
      </h2>
      <p className="bg-green-700 text-2xl md:text-3xl text-white mt-5 px-8 pt-2 pb-4 rounded-lg">
        Please, check our{" "}
        <Link to="/menu" className="text-orange-600 text-3xl cursor-pointer">
          menu
        </Link>
      </p>
    </div>
  );
};

export default Home;
