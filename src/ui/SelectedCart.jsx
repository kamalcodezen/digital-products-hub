const SelectedCart = ({ addToCart }) => {
  //   const { icon, name, price } = cart;

  const total = addToCart.reduce((sum, cart) => sum + cart.price, 0);

  return (
    <div className="p-7 bg-base-200 rounded-xl space-y-7">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {/* cart  */}

      {addToCart.map((cart) => {
        return (
          <div className="flex justify-between bg-base-100 p-4 rounded-xl">
            <div className="flex gap-7 items-center justify-center">
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-base-200 rounded-full shadow-2xl ">
                <img src={cart.icon} alt={cart.name} />
              </div>

              <div>
                <h2 className="text-xl font-bold">{cart.name}</h2>
                <p className="text-gray-500">${cart.price}</p>
              </div>
            </div>

            <div className="flex items-center">
              <button className="font-bold text-sm cursor-pointer text-red-500">
                Remove
              </button>
            </div>
          </div>
        );
      })}

      {/* proceed to checked button */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-400">Total:</p>
          <span className="text-xl font-bold">${total}</span>
        </div>

        <button className="btn rounded-full font-medium px-5.5 bg-linear-to-r from-[#4F39F6]  to-[#9B5CF6] text-white w-full text-center">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedCart;
