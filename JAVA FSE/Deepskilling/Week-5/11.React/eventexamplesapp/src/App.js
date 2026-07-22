import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  // Task 1
  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Have a nice day!");
  };

  // Task 2
  const sayWelcome = (message) => {
    alert(message);
  };

  // Task 3
  const handlePress = () => {
    alert("I was clicked");
  };

  // Task 4
  const handleSubmit = (e) => {
    e.preventDefault();

    const euro = (parseFloat(amount) / 90).toFixed(2);

    alert(`Converting to Euro...\n${amount} INR = ${euro} Euro`);

    setCurrency("Euro");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br /><br />

      <button onClick={handlePress}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>
        <label>Amount </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency </label>

        <input
          type="text"
          value={currency}
          readOnly
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;