import './footer.scss'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import twitter from '../../assets/images/icon-twitter.svg'


const Footer = () => {

  const linkList = ["About","Careers","Events","Products","Support"]
    

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-container-left'>
          <div className="footer-container-logo">
            <img src={logo} alt='logo' />
          </div>
          <div className='footer-container-navegation'>
            <ul className='footer-container-navegation-list'>
              {
                linkList.map((linkList, index)=>(
                  <a className='footer-container-navegation-link' href="#" key={index}>{linkList}</a>
                ))
              }
            </ul>
          </div>
        </div>

        <div className='footer-container-right'>
          <div className='footer-container-socialmedia'>
            <a href='#'><img src={facebook} alt='socialmedia-facebook'></img></a>
            <a href='#'><img src={twitter} alt='socialmedia-facebook'></img></a>
            <a href='#'><img src={pinterest} alt='socialmedia-facebook'></img></a>
            <a href='#'><img src={instagram} alt='socialmedia-facebook'></img></a>
          </div>

          <p className='footer-container-copyright'>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer 
