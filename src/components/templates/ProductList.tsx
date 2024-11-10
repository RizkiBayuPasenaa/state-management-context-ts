import product from "../../data/product";
import CartItem from "../fragments/CartItem";
import { useCart } from "../../context/CartContext";
function ProductList() {
  const { state, dispatch } = useCart();
  console.log(state.cart);
  
  return (
    <div className="product-container">
      {product.map((data)=> (
        <CartItem
          key={data.id}
          title={data.title}
          price={data.price}
          description={data.description}
          addToCart={() => dispatch({ type: "ADD_TO_CART", payload: data })}
        />
      ))}
    </div>
  )
}

export default ProductList;