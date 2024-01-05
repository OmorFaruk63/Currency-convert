import { useState } from "react";
import "./CurrencyConverter.css";
import data from "../Json/data.json";
const CurrencyConverter = () => {
  const [currency, setCurrency] = useState(data);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("BDT");
  const [to, setTo] = useState("USD");
  const currencyArray = Object.keys(currency.results);
  console.log(currency.results);
  function convertCurrency() {}
  return (
    <div className="Currency-Converter">
      <h2>Currency Converter App</h2>
      <h1>{}</h1>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          From Currency:
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencyArray.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label>
          To Currency:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencyArray.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <button onClick={convertCurrency}>Convert</button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
