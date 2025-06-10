import { useState } from 'react';
import './styles/_navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo">
          <img src="/assets/Logo.png" alt="Whitepace Logo" />
        </div>
        <div className="navbar__menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </div>

      {/* Shown only on large screens */}
      <ul className="navbar__links">
        <li>Products <span>▼</span></li>
        <li>Solutions <span>▼</span></li>
        <li>Resources <span>▼</span></li>
        <li>Pricing <span>▼</span></li>
      </ul>

      <div className="navbar__buttons">
        <button className="login-btn">Login</button>
        <button className="try-btn">Try Whitepace free →</button>
      </div>

      {/* Dropdown for mobile */}
      {isOpen && (
        <div className="navbar__dropdown">
          <ul className="navbar__links">
            <li>Products <span>▼</span></li>
            <li>Solutions <span>▼</span></li>
            <li>Resources <span>▼</span></li>
            <li>Pricing <span>▼</span></li>
          </ul>
          <div className="navbar__buttons">
            <button className="login-btn">Login</button>
            <button className="try-btn">Try Whitepace free →</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;