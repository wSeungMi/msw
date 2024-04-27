import { useSearchParams } from "react-router-dom";

export default function Search() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams] = useSearchParams();
  return (
    <>
      <h1>Search Page</h1>
      <div>Search: {searchParams.get("query")}</div>
    </>
  );
}
