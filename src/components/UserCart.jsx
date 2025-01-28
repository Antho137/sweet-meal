const UserCart = ({ cart, deleteFromCart, totalCost, setCart, deleteCart }) => {
  return (
    <div
      className={`absolute left-0 top-0 right-0 bg-slate-500 px-5 pt-1 pb-3 mt-10 mx-auto text-center rounded-lg ${
        cart.length > 0 ? "block max-w-[320px] text-sm" : "hidden"
      }`}
    >
      <div className="flex justify-between pb-2">
        <h3 className="text-xl text-white">The cart</h3>
        <button
          className="text-white text-2xl pointer bg-transparent"
          onClick={() => deleteCart()}
        >
          &times;
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">The cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.product.id} className="my-1 py-1.5 bg-white">
                <div className="flex justify-between items-center my-1 mx-2">
                  <div className="max-w-[60px] h-auto float-left">
                    <img src={item.product.image} alt="" />
                  </div>
                  <div className="font-bold">
                    <p className="text-orange-600">{item.product.name}</p>
                    <p>${item.product.price}</p>
                    <div className="flex justify-between items-center my-2 mx-3">
                      <button
                        className="text-lg bg-gray-300 px-2 pb-1 rounded-lg"
                        onClick={(e) => {
                          setCart((prevCart) => {
                            const updatedCart = prevCart.map((prevItem) =>
                              prevItem.product.id === item.product.id
                                ? { ...prevItem, quantity: item.quantity + 1 }
                                : prevItem
                            );

                            return updatedCart;
                          });
                        }}
                      >
                        +
                      </button>
                      <p className="px-2">{item.quantity}</p>
                      <button
                        className="text-lg bg-gray-300 px-2 pb-1 rounded-lg"
                        onClick={(e) => {
                          setCart((prevCart) => {
                            const updatedCart = prevCart.map((prevItem) =>
                              prevItem.product.id === item.product.id
                                ? {
                                    ...prevItem,
                                    quantity: Math.max(item.quantity - 1, 0),
                                  }
                                : prevItem
                            );

                            return updatedCart;
                          });
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="my-1 mx-1">
                    <button
                      className="bg-orange-600 text-white px-2 pt-0.5 pb-1 mt-2 rounded-md"
                      onClick={() => deleteFromCart(item.product)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-2 text-xl text-white">
            <p className="total">Total: ${totalCost()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCart;
