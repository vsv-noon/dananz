import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link className='logo-link' to="/">
        <h2>Dananz</h2>
      </Link>
      </div>
  )
}

export default Logo