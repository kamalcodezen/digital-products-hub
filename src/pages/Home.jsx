import { Suspense } from "react";
import ALLTools from "../components/allTools/ALLTools";
import Banner from "../components/banner/Banner";
import Choose from "../components/chooseSection/Choose";
import CTASection from "../components/ctaSection/CTASection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Pricing from "../components/pricingSection/Pricing";
import Rating from "../components/ratingSection/Rating";

const productDataFetch = fetch("/productData.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Navbar />

      <Banner />

      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <Rating />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
      >
        <ALLTools productDataFetch={productDataFetch} />
      </Suspense>

      <Choose />

      <Pricing />

      <div className="bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6]">
        <CTASection />
      </div>

      <div className="bg-[#101727]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
