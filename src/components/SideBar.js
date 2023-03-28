import {FaFacebookF,FaInstagram} from 'react-icons/fa'

const SideBar = ({isOpen, setIsOpen})=>{
    
    return(
        <section aria-hidden={isOpen} className="modal-container sidebar-container">
            <aside aria-hidden={isOpen} className="aside-container">
                <div className="side-navbar">
                    <div className="head">
                        <button onClick={()=>{setIsOpen(false)}}  className="close-button" >X</button>
                    </div>
                    <div className="content">
                       <ul className="nav-links" >
                        <a>Promoções</a>
                        <a>Decorações</a>
                        <a>As Nossas Marcas</a>
                        <a>Envio de Encomendas</a>
                        <a>Conta</a>
                       </ul>
                    </div>
                    <div className="social-links" >
                        <FaFacebookF size={17} />
                        <FaInstagram size={17} />
                    </div>
                </div>
            </aside>
        </section>
    )
};

export default SideBar;