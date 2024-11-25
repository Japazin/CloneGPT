import { Link, Outlet } from "react-router";
import "./rootLayout.css";

const RootLoayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="logo.png" alt="" />
          <span>Jap IA</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLoayout;
