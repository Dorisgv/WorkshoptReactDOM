import './header.scss'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/images/icon-close.svg' 
import { useNavigate } from 'react-router-dom'

const Modal = () => {
    const navigate = useNavigate() 

const closeModal = () => {
  navigate('/header')
}
    const link = ["About", "Careers", "Events", "Products", "Support"]
return (
    <div className='containerHeader__modal'>
        <article>
            <img src={logo} alt="" />
            <img src={close} alt="" onClick={closeModal}/>
        </article>
        <nav>
            {
                link.map((link, index) => (
                <a key={index}>{link}</a>
                ))
            }
        </nav>
    </div>
)
}

export default Modal