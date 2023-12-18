import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
function Practice() {
  const market = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  const [value, setValue] = useState(0);
  const lists = ["abebe", "beso", "bela"];
  const handleAdd = 
    (e) => {
      e.preventDefault();
    //   console.log(value);
      return setValue((prevValue) => prevValue + 1);
    };
    const handleSub = 
    (e) => {
      e.preventDefault();
    //   console.log(value);
    return setValue((prevValue) => prevValue - 1)
    }
    useEffect(
      () => {
        console.log("the value is changed to " + value)
      }
    , [value])
 
  return (
    <>
      <h1>lists</h1>
      <ul className="list-group">
        {lists.map((list) => (
          <li className="list-group-item" key={list}>
            {list}
          </li>
        ))}
      </ul>
      <div className="row">
        <button className="col bg-secondary m-5 p-4" onClick={handleAdd}>
          +
        </button>
        <button className="col bg-primary m-5 p-4" onClick={handleSub}>-</button>
      </div>
      <div className="row">
        <h1 className="col text-center">Value = {value}</h1>
      </div>
      <div className="align-items-center container">
        <div className="row">
          <input
          className="col-6" 
          placeholder="search your input here"/>
          </div>
          <div className="row">
<label className="col-6">
    <input
      type="radio"
      name="marketType"
      value="stock"
    />
    Select only the stock market
  </label>  
  </div>      <div className="row">
  <h2 className="col-2">name</h2>
  <h2 className="col-2">price</h2>
  </div>
      
        
       
          {market.map((values, index) => (
             <div key={index} className="row">
            <h3 className="col-2">{values.name}</h3>
            <h3 className="col-2">{values.price}</h3>
            </div>
          ))}
     </div>
    </>
  );
}

export default Practice;
