import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
function App() {
  return (
    <div>
      {/*
        Todo: 1 ให้ Declare ตัว Component ย่อย 
       เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <header> 
      */}
      <Header />
      {/*
        Todo 2: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <main> 
      */}
      <Main />
      {/*
        Todo 3: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <section className="product-section"> 
      */}
      <Products />
      {/*
        Todo 4: ให้ Declare ตัว Component ย่อย
        เพื่อแบ่งสัดส่วนของ HTML Element ในส่วนของ <footer> 
      */}
      <Footer />
    </div>
  );
}

export default App;
