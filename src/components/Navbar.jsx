import {useState} from 'react';
import { MdDensityMedium , MdClear} from 'react-icons/md';

import '../Styles/Navbar.css';
import logo  from '../assets/logo4.jpg';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
        <div className="app__navbar_logo">
            <img src={logo} alt="Chaivevinah Logo " />
        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#menu">Menu</a></li>
            <li className='p__opensans'><a href="#order">Order Now</a></li>
            <li className='p__opensans'><a href="#contact">Contact</a></li>
        </ul>

    
    {/* Small screens */}
    <div className="app__navbar-smallscreen">
        <MdDensityMedium color='#fff' fontSize={27} onClick={()=>{setToggle(true)}} />
        
        {/* if true show this block of code */}
        {toggle && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClear fontSize={27} className='overlay__close' onClick={()=>{setToggle(false)}}/>
            <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href="#home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#order">Order Now</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
        </div>
        )}
        </div>

    </nav>
    )
}

export default Navbar
