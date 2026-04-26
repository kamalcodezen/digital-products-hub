import Banner from "../components/banner/Banner";
import Choose from "../components/chooseSection/Choose";
import CTASection from "../components/ctaSection/CTASection";
import Navbar from "../components/navbar/Navbar";
import Pricing from "../components/pricingSection/Pricing";
import Rating from "../components/ratingSection/Rating";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <Rating />
      </div>
      <Choose />
      <Pricing />

      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <CTASection />
      </div>
    </div>
  );
};

export default Home;
