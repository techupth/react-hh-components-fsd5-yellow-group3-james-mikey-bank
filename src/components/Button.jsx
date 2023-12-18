export default function Button(props) {
  return (
    <div>
      <button className={props.className ?? "add-to-cart-button"}>
        Add to Cart
      </button>
    </div>
  );
}
