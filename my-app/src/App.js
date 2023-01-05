import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: './nike.jpg',
      name: 'Nike Jordan',
      category: 'Shoes',
      seller: 'Nike Official ltd.',
      price: 1999
    },
    {//https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg
      url: './nike7.jpg',
      name: 'Nike Air Max',
      category: 'Shoes',
      seller: 'Nike Official ltd.',
      price: 2599
    },
    {//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU
      url: './nike9.jpg',
      name: 'Nike Running Shoes',
      category: 'Shoes',
      seller: 'Nike Official ltd.',
      price: 50000
    },
    {//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU
      url: './nike4.jpg',
      name: 'Nike Sneakers',
      category: 'Shoes',
      seller: 'Nike Official ltd.',
      price: 4000
    },
    {//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU
      url: './nike10.jpg',
      name: 'Air Jordan',
      category: 'Shoes',
      seller: 'Nike Official ltd.',
      price: 2000
    },
    {//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU
      url: './nike6.jpg',
      name: 'Nike Dummy',
      category: 'Shoes',
      seller: 'Nike Ltd.',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
