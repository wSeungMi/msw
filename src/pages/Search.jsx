import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import { useEffect, useState } from "react";

export default function Search() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [contries, setContries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setContries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <>
      <h1>Search Page</h1>
      <div>Search: {searchParams.get("q")}</div>
    </>
  );
}
