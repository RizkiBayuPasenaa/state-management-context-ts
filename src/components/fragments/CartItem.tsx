import Button from "../elements/Button";

interface CartItemProps {
  title: string;
  price: number;
  description: string;
  addToCart?: () => void;  // pastikan ini tidak opsional jika pasti akan dikirim
  removeFromCart?: () => void;  // pastikan ini tidak opsional jika pasti akan dikirim
}

function CartItem(props: CartItemProps) {
  const { price, title, description, addToCart, removeFromCart } = props;

  return (
    <div className="cart-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
      {addToCart && 
        <Button type="button" onClick={addToCart}
        >
          Add to Cart
        </Button>
      }
      {removeFromCart &&
        <Button type="button" onClick={removeFromCart}
        >
          Remove from Cart
        </Button>
      }

    </div>
  );
}

export default CartItem;
