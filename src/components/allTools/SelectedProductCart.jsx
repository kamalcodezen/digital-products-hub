import SelectedCart from "../../ui/SelectedCart";

const SelectedProductCart = ({ addToCart }) => {
  console.log(addToCart);

  return (
    <div>
      <div>
        <SelectedCart addToCart={addToCart}></SelectedCart>
      </div>
    </div>
  );
};

export default SelectedProductCart;
