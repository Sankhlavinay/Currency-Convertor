import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json`)
      .then((res) => res.json())
      .then((res) => setData(res.eur));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
