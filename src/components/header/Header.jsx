import './header.scss'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-hamburger.svg'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const link = ["About", "Careers", "Events", "Products", "Support"]
  const navigate = useNavigate() 

const openModal = () => {
  navigate('/modal')
}

  return (
    <header className='containerHeader'>
      
        <div className='containerHeader__navbar'>
            <img src={logo} alt="" />
            <button className='menu__hamburguer' onClick={openModal}> 
              <img src= {menu} alt=""/>
            </button>
            
            <nav>
              {
                link.map((link, index) => (
                  <a key={index}>{link}</a>
                ))
              }
            </nav>
        </div>
        <h2 className='containerHeader__text'>IMMERSIVE EXPERIENCES THAT DELIVER</h2>
        
    </header>

  )
}

export default Header 