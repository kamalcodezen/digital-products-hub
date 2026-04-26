import ProductCart from "../../ui/ProductCart";

const AllProduct = ({ productData }) => {
  return (
    <div>
      <div className="grid  md:grid-cols-3 gap-6">
        {productData.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
