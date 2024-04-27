import { useParams } from "react-router-dom";

export default function Country() {
  const params = useParams();

  return (
    <>
      <h1>Country Page</h1>
      <div>Country: {params.code}</div>
    </>
  );
}
