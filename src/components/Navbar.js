import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="App-header">
      <h3>varia</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;