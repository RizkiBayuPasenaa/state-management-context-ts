import { useCart } from "../../context/CartContext"

function CartItemList() {
  const {state, dispatch} = useCart()

  console.log(state)
  if(state.cart.length === 0) return (
    <div>
      <h3>Your Cart Is Down Here</h3>
      <p>Your cart is emptypy</p>
    </div>)

  return (
    <div className="cart-list-container">
      <h3>Your Cart Is Down Here</h3>
      {state.cart.map((data, index) => (
        <div key={index}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h3>{data.price}</h3>
          <button onClick={() => dispatch({type :'REMOVE_FROM_CART', payload : data.id})}>Remove from Cart</button>
        </div>
      ))}

    </div>
  )
}

export default CartItemList
