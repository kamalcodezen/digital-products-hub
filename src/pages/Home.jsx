import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Rating from "../components/ratingSection/Rating";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <Rating />
      </div>
    </div>
  );
};

export default Home;
