import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chest">Chest</Link>
          </li>
          <li>
            <Link to="/back">Back</Link>
          </li>
          <li>
            <Link to="/abs">Abs</Link>
          </li>
          <li>
            <Link to="/legs">Legs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
