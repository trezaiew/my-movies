import ListGenres from '../ListGenres';
import ModalRegister from '../ModalRegister';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-warning navbar-dark mt-0">
      <a className="navbar-brand" href="#">MyMovies</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Movies & TV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <ModalRegister />
        </ul>
      </div>
    </nav>

  )
}

export default Header