import axios from "axios";
import { useEffect, useState } from "react";
import NetworkErrorPage from "../NetworkErrorPage/NetworkErrorPage";

const Hook = (name = "bdt") => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${name}.json`
    )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        <NetworkErrorPage />;
      });
  }, [name]);

  return { data, error, loading };
};

export default Hook;
