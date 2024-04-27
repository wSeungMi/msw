import Root from "../routes/root";
import S from "../components/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Root />
      <main className={S.main}>{children}</main>
    </div>
  );
}
