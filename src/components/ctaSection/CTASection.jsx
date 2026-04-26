import { Play } from "lucide-react";

const CTASection = () => {
  return (
    <section>
      <div className="py-[clamp(3rem,6vw,7.5rem)] space-y-7">

        {/* heading content  */}
        <h2 className="text-[clamp(2.75rem,4vw,2rem)] font-bold mb-2 text-center">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-gray-300 text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>

        {/* CTA button */}
        <div className="space-x-4  text-center">
          <button className="btn bg-white bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] rounded-full  bg-clip-text text-transparent font-medium shadow-xl border ">
            <a href="#">Explore Products</a>
          </button>
          <button className="btn font-medium rounded-full border-[1.5px] border-[#4F39F6] shadow text-[#1b00e4]">
            <Play />
            <a href="#">View Pricing</a>
          </button>
        </div>
        <p className="text-gray-300 text-center">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
