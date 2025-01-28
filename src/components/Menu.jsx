import { useState } from "react";
import Product from "./Product";
import UserCart from "./UserCart";
import { products } from "../data/products";

const Menu = () => {
  const [foods] = useState([products]);
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const foodInCart = cart.find((item) => item.product.id === products.id);
    if (foodInCart) {
      const cartUpdate = cart.map((item) =>
        item.product.id === products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(cartUpdate);
    } else {
      setCart([...cart, { product: products, quantity: 1 }]);
    }
  };

  const deleteFromCart = (products) => {
    const updatedCart = cart.filter((item) => item.product.id !== products.id);
    setCart(updatedCart);
  };

  const deleteCart = () => {
    if (cart) {
      setCart([]);
    }
  };

  const totalCost = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="relative min-h-[100vh] flex flex-col justify-center items-center my-10 pb-20 pt-4 px-4">
      <div className="mt-8 mb-2 p-4 text-center text-gray-900">
        <h2 className="text-orange-600 text-2xl">Our Menu</h2>
        <p className="text-lg">Please, select and add to cart</p>
      </div>
      <div className="max-w-[760px] min-w-[320px] mx-auto">
        <Product foods={foods} addToCart={addToCart} />
        <UserCart
          cart={cart}
          deleteFromCart={deleteFromCart}
          totalCost={totalCost}
          setCart={setCart}
          deleteCart={deleteCart}
        />
      </div>
    </div>
  );
};

export default Menu;
