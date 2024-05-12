import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    console.log("home", data);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <>
      <CountryList countries={countries} />
    </>
  );
}
