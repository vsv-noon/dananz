import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
// import './../../styles/global.scss';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">          
      <Logo />
      <nav className='nav'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/teams">Our Teams</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </nav>
    </header>
  )
}

export default Header;