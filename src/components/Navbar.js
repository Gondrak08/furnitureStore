import { GiHamburgerMenu } from 'react-icons/gi'
import { BsBag, BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

import Logo from '../assets/homestorelogo.png'

const Navbar = () => {

    document.addEventListener("scroll",function(){
        if(window.scrollY > 0){
            document.querySelector(".Navbar").classList.add("scroll");
        }else{
            document.querySelector(".Navbar").classList.remove("scroll");
        }
    });

    return (
        <section className="Navbar">
            <div className='content'>
                <div className='NavButtonContainer' >
                    <GiHamburgerMenu size={25} />
                </div>
                <div className='NavLogo' >
                    {/* <h3>Home & Store</h3> */}
                    <img className='logo' src={Logo} />
                </div>
                <div className='NavIconsContainer' >
                    <AiOutlineUser size={25} />
                    <BsSearch size={20} />
                    <BsBag size={22} />
                </div>

            </div>
        </section>
    )
};

export default Navbar;