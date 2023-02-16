import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <main className='main'>
        <div className="heading-container">
          <div className="heading">
            Ecommerce site
          </div>
          <div className="heading-sub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, vitae beatae commodi impedit id cupiditate perspiciatis voluptates placeat molestiae exercitationem.
          </div>
        </div>
        <div className="login-btns">
          <Link className='btn btn-primary' to='/Login'>Login</Link>
          <Link className='btn btn-warning' to='/Product'>Start Exploring</Link>
        </div>
      </main>
    </div>
  )
}

export default Landing
