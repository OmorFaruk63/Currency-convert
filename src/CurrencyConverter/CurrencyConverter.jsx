import { useState } from "react";
import "./CurrencyConverter.css";
import Hook from "../hook/hook";
import Loading from "../Loading/Loading";
import { MdOutlineSwapVert } from "react-icons/md";
const CurrencyConverter = () => {
  const [from, setFrom] = useState("bdt");
  const { data, loading } = Hook(from.toLocaleLowerCase());

  const [currency, setCurrency] = useState();
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("usd");
  const currencyArray = data[from] ? Object?.keys(data[from]) : [];

  function convertCurrency() {
    setCurrency(amount * data[from][to]);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Currency-Converter">
      <h2>Currency Converter App</h2>
      <div className="animation"></div>
      <h1>${currency ? currency?.toFixed(2) : "00"} </h1>
      <span>Currancy Update: {data?.date}</span>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label>
          From Currency:
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {currencyArray?.slice(3, -1)?.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </label>

        <span onClick={()=>{
          setFrom(to)
          setTo(from)
        }} className="swap"><MdOutlineSwapVert /></span>
        <label>
          To Currency:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {currencyArray?.slice(3, -1)?.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
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
