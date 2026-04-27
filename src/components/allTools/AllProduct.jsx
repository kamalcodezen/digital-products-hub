import ProductCart from "../../ui/ProductCart";

const AllProduct = ({ productData, addToCart, setAddToCart }) => {
  return (
    <div>
      <div className="grid  md:grid-cols-3 gap-6 items-stretch">
        {productData.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          ></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
