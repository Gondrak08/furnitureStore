import { GiHamburgerMenu } from 'react-icons/gi'
import { BsBag, BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

import LogoSvgWhite from '../assets/LogoSvg.js'
import LogoSvgBlack from '../assets/LogoSvgBlack.js'


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
      
                    <LogoSvgBlack className="logo black" />
                    <LogoSvgWhite className="logo white" />
                </div>
                <div className='NavIconsContainer' >
                    <AiOutlineUser className='avatar' size={25} />
                    <BsSearch className='search' size={20} />
                    <BsBag className='shopbag' size={22} />
                </div>

            </div>
        </section>
    )
};

export default Navbar;