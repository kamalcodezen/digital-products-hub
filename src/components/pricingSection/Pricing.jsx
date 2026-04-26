import { useEffect, useState } from "react";

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch("pricingData.json")
      .then((res) => res.json())
      .then((data) => setPricingData(data));
  }, []);

  return (
    <section className="my-container">
      {/* heading */}
      <h2></h2>
      <p></p>

      {/* card */}
      <div></div>
    </section>
  );
};

export default Pricing;
