import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Welcome from './pages/welcome'
export default function App() {
  return (
    <Login/>
      // <Routes>
      //   <Route path="/" component={Layout}>
      //     <Route index component={Home} />
      //     <Route path="about" component={Login} />
      //     <Route path="dashboard" component={Welcome} />
      //   </Route>
      // </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
