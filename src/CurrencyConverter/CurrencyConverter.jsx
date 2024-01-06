import { useState } from "react";
import "./CurrencyConverter.css";
import Hook from "../hook/hook";

const CurrencyConverter = () => {
  const [from, setFrom] = useState("BDT");
  const data = Hook(from.toLocaleLowerCase());
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("USD");
  const currencyArray = data.bdt ? Object?.keys(data.bdt) : [];
  function convertCurrency() {}
  return (
    <div className="Currency-Converter">
      <h2>Currency Converter App</h2>
      <h1>{"$00"}</h1>
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
            {currencyArray.slice(3, -1)?.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label>
          To Currency:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencyArray?.slice(3, -1)?.map((currency) => (
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
