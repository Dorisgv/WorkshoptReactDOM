import './header.scss'
import logo from '../../assets/images/logo.svg'
import menu from '../../assets/images/icon-hamburger.svg'

const Header = () => {
  return (
    <header className='containerHeader'>
        <div className='containerHeader__navbar'>
            <img src={logo} alt="" />
            <button className='menu__hamburguer'>
            <img src= {menu} alt=""/>
            </button>
            <nav>
                <a>About</a>
                <a>Careers</a>
                <a>Events</a>
                <a>Products</a>
                <a>Support</a>
            </nav>
        </div>
        <h2 className='containerHeader__text'>IMMERSIVE EXPERIENCES THAT DELIVER</h2>
    </header>

  )
}

export default Header 