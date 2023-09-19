import './header.scss'
import logo from '../../assets/images/logo.svg'
import close from '../../assets/images/icon-close.svg'

const Modal = ({onClose}) => {


    const link = ["About", "Careers", "Events", "Products", "Support"]
return (
    <div className='containerHeader__modal'>
        <article>
            <img src={logo} alt="" />
            <img src={close} alt="" onClick={() => onClose(false)}/> 
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