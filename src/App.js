import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Dr Mahfuz",
    Job: "Doctor"
  }
  var singer = {
    name: "Tara Rani",
    Job: "Singer"
  }
  var style = {
    color: "red",
    backgroundColor: "gray",
    padding: "8px 16px",
    borderRadius: "4px",
    width: "400px"
  }

  
  const actor = ['Salman', 'Elias', 'Manna', 'Bapparaz'];
  const actoress = ['Bobita', 'Sabnur', 'Koli', 'Kobori', 'Sabina', 'Jarin'];
  const products = [
    {name: "Photoshop", price: "$ 69.50"},
    {name: "Illustrator", price: "$ 48.45"},
    {name: "Adobe Reader", price: "$ 28.40"},
    {name: "Adobe Master", price: "$ 89.00"},
    {name: "Premium Pro", price: "$ 245.50"},
    {name: "Adobe Index", price: "$ 89.00"}
  ];
  const productName = products.map(product => product.name);
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            actoress.map(actoress => <li>{actoress}</li>)
          }
          <li>{productName[0]}</li>
          <li>{productName[1]}</li>
          <li>{productName[2]}</li>
        </ul>
        <div style={{display: "flex",flexWrap: "wrap", justifyContent: "center"}}>
        {
          products.map(pd => <Product Product={pd}> </Product>)
        }
        <Product Product={products[0]}></Product>
        <Product Product={products[1]}></Product>
        </div>
      
        <h3 className="heading" style={style}>My Heading {person.name} {person.Job}</h3>
        <h2 style={{color: "black", backgroundColor:"orange", padding: "6px 15px"}}>Singer: {singer.name} {singer.Job}</h2> 
        <Person name="Shakib Khan" nayika="Apu"></Person>
        <Person name="Rubel" nayika="Purnima"></Person>
        <Person name="Alamgir" nayika="Sabana"></Person>
        <Person name= {actor[2]} nayika={actoress[0]}></Person>
      </header>   
    </div>
  )
};
function Users() {
  const [user, setUser] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);
  
  return (
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      {
        <ul>
          {user.map(user => <li>{user.name}</li>)}
        </ul>
      }
      <h3>Dynamic Phone Number: {user.length}</h3>
      {
        <ul>
        {user.map(user => <li>{user.phone}</li>)}
        </ul>
      }
      <h3>Dynamic Email: {user.length}</h3>
      {
        <ul>
        {user.map(user => <li>{user.email}</li>)}
        </ul>
      }
      
    </div>
  )
}
function Counter(props){
  const [count, setCount] = useState(10);
  const handleIncreaser = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onMouseMove={handleIncreaser} style={{padding: "10px", fontSize: "18px", borderRadius: "5px"}}>Increase</button>
      <button onClick={() => setCount(count-1)} style={{padding: "10px", fontSize: "18px", borderRadius: "5px", marginLeft: "10px"}}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const ProductStyle = {
    width: "200px",
    height: "200px",
    border: "2px solid black",
    padding: "15px",
    margin: "5px",
    backgroundColor: "grey",
    float: "left"
  }
  const {name, price} = props.Product;
  console.log(name,  price);
  
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
  <h5>{price}</h5>
      <button> Buy Now </button>
    </div>
  )
};

function Person(props) {

  return (
    <div style= {{border: "2px solid red", margin: "4px", padding: "10px", width: "400px"}}>
      <h2>Name: {props.name}</h2>
      <h4>Hero of {props.nayika}</h4>
    </div>
  )
}

export default App;
