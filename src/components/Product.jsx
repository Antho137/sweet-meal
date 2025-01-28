import { products } from "../data/products";

const Product = ({ addToCart }) => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center sm:flex-row flex-wrap justify-around">
      {products.map((product) => (
        <div
          className="bg-[#F5DEB3] w-[220px] my-2 mx-auto p-4 text-center rounded-lg border border-gray-400"
          key={product.id}
        >
          <img src={product.image} alt="" className="w-3/3 h-auto mx-auto" />
          <p className="text-gray-900 font-medium mt-2 mb-1">{product.name}</p>
          <p className="text-gray-900 font-medium mb-2">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-600 text-white w-full pt-1 pb-2 rounded-md"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
