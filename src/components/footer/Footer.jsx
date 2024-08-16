import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaMailBulk } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div  className='footer'>
      <div className='footer-info'>

        <div className="information">
          <h1>Informations</h1>
          <div className="info-container">
            <ul>
              <li>
                <Link to={''}>Contact me</Link>
              </li>
              <li>
                <Link  to={''}>FAQ</Link>
              </li>
              <li>
                <Link to={''}>Usage terms</Link>
              </li>
              <li>
                <Link to={''}>Privacity policies</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="uselinks">
          <h1>Useful links</h1>
          <div className="footer-menu">
              <ul>
                <li>
                  <Link to={''}>Home page</Link>
                </li>
                <li>
                  <Link to={''}>Learn about me</Link>
                </li>
                <li>
                  <Link to={''}>My projects</Link>
                </li>
                <li>
                  <Link to={''}>Courses and certificats</Link>
                </li>
                <li>
                  <Link to={''}>contact me</Link>
                </li>
              </ul>
          </div>
        </div>

        <div className="social-links">
          <h1>Follow me</h1>
          <div className="social-link">
            <ul>
              <li>
                <Link to={''}><FaFacebook /></Link>
              </li>
              <li>
                <Link to={''}><FaInstagram /></Link>
              </li>
              <li>
                <Link to={''}><FaWhatsapp /></Link>
              </li>
              <li>
                <Link to={''}><FaInstagram /></Link>
              </li>
              <li>
                <Link to={''}><FaLinkedin /></Link>
              </li>
              <li>
                <Link to={''}><FaTwitter /></Link>
              </li>
              <li>
                <Link to={''}><FaYoutube /></Link>
              </li>
              <li>
                <Link to={''}><FaMailBulk /></Link>
              </li>
            </ul>

            <div className="sponsors">
              Partners
            </div>
          </div>
        </div>

      </div>
      <div className='footer-metadata'>
        <span>All rights reserves &reg;</span>
        <span>&copy; 2024</span>
        <span><a href="#">Usage terms</a></span>
        <span><a href="#">Privacity policies</a></span>
      </div>
    </div>
  )
}

export default Footer