import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="nav">
        <header>
          <nav>
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
          </nav>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
