import Button from "./Button";

function Products() {
  return (
    <section className="product-section">
      <div className="product-section-container">
        <h2 className="product-featured-heading">Featured Products</h2>
        <div className="product-card-list">
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Premium Bluetooth Headphones</h3>
            <p className="product-price">2,400 Baht</p>
            {/*
          Todo 5: ให้ Declare ตัว Component Button เพื่อ Render ปุ่ม “Add to Cart” ที่ซ้ำกันอยู่
          (จุดที่ 1)
        */}
            {/*
          Todo 6: หลังกจากทำ Todo 5 เสร็จ
          ให้เปลี่ยน Style ของปุ่ม “Add to Card” แก้ไข className ใน Component `Button` ที่สร้างขึ้นมา
          จาก “add-to-cart-button” เป็น “secondary-add-to-cart-button”
        */}
            <Button className="add-to-cart-button-secondary" />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Classic Leather Watch</h3>
            <p className="product-price">4,000 Baht</p>
            {/* Todo 5: (จุดที่ 2) */}
            <Button />
          </div>
          <div className="product-card">
            <img
              src="https://placehold.co/300x300"
              alt="The Lorem Ipsum for photos."
            />
            <h3>Organic Green Tea</h3>
            <p className="product-price">79.99 Baht</p>
            {/* Todo 5: (จุดที่ 3) */}
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
