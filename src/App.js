import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const nayoks = ['Shakib Khan', 'Kabila Abila', 'Shouvo Khan', 'Shukkor Symoon']

  const allProducts = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$67.99' },
    { name: 'Adobe', price: '$6.99' },
    { name: 'API', price: '$23.99' }
  ]
  return (
    <div>
      <header className='App-header'>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}

          {allProducts.map(product =>
            <div>
              <li>{product.name}</li>
              <li>{product.price}</li>
            </div>
          )}
        </ul>
        <h1>I am practicing react.</h1>
        <Counter></Counter>
        <Users></Users>
        {
          allProducts.map(pd =>
            <Products product={pd}></Products>)
        }
      </header>
    </div>
  )
}
function Products(props) {
  const productStyle = {
    textAlign: 'center',
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
    width: '250px',
    height: '250px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  // const handleDecrease = () =>setCount(count - 1);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onMouseOut={() =>setCount(count + 1)}>Increase</button>
      
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([ ]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>
    </div>
  )
}
export default App;
