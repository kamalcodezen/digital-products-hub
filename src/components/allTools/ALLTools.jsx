const ALLTools = () => {
  return (
    <section className="my-container">
      <div>
        
        {/* heading */}
        <h2 className="text-[clamp(2.75rem,5vw,2.75rem)] font-bold mb-2 text-center ">
          Premium Digital Tools
        </h2>
        <p className="text-gray-300 text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        {/* CTA button  */}
        <div className="space-x-1 mx-auto mt-6 flex items-center text-center  shadow-3xl  bg-gray-100 w-[200px] h-[50px] px-[7px] py-6 rounded-full">
          <button className="btn bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] rounded-full text-white font-medium  ">
            Products
          </button>
          <button className="btn bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] rounded-full text-white font-medium px-[22px]">
            Cart (2)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ALLTools;
