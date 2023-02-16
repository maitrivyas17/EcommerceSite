import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-brand">Navbar</div>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <i className='bi bi-house-door-fill'></i>
                          <Link className='nav-link active' aria-current="page" to='/'>Home</Link>
                      </li>
                      <li className="nav-item">
                          <i className='bi bi-phone-fill'></i>
                          <Link className="nav-link" aria-current="page" to='/product'>Products</Link>
                      </li>
                      <li className="nav-item">
                          <i className='bi bi-cart-fill'></i>
                          <Link className="nav-link" aria-current="page" to='/cart'>Cart</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
