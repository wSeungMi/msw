// import { Link } from "react-router-dom";
import S from "../components/Layout.module.css";

export default function Root() {
  return (
    <>
      <header className={S.header}>
        🌎 NARAS
        {/* <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/search"}>Search</Link>
              </li>
              <li>
                <Link to={"/country"}>Contury</Link>
              </li>
            </ul>
          </nav> */}
      </header>
    </>
  );
}
