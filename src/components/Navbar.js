import './style/Navbar.css';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';

import MainButton from './MainButton';
import Line from './Line'
import { HashLink } from 'react-router-hash-link';
import useWindowDimensions from '../windowDimensions';
import $ from 'jquery';

function Logo() {
    return (
        <HashLink to='#introduction'>
            <div>
                <img className='logo' src={logo} />
            </div>
        </HashLink>
    );
}
function MenuIcon() {
    const toggleMenu = () => {
        $('#menu').addClass('menu-active');
    }
    return (
        <div onClick={toggleMenu}>
            <img className='menu-icon' src={menu} />
        </div>
    )
}
function NavbarButton(props) {
    return (
        <div className="navbar-button">
            {props.text}
        </div>
    );
}
function Menu(props) {
    const toggleMenu = () => {
        $('#menu').removeClass('menu-active');
    }
    return (
        <div id='menu' className='menu menu-hidden' onClick={toggleMenu}>
            <HashLink to="#about"><div className='menu-button'>About</div></HashLink>
            <HashLink to="#projects"><div className='menu-button'>Projects</div></HashLink>
            <HashLink to="#experience"><div className='menu-button'>Experience</div></HashLink>
            <a href="https://drive.google.com/file/d/1QeutaYQsNSi8Ag-XIKQqpzvRitHjXvNd/view" target="_blank"><div className='menu-button'>Resume</div></a>
            <a href="https://github.com/noahkester" target="_blank"><div className='menu-button'>Github</div></a>
        </div>
    )
}
function Navbar() {
    const { height, width } = useWindowDimensions();
    if (width > 1064) {
        return (
            <div className="navbar-container" data-aos="fade-down">
                <div className="navbar">
                    <HashLink to="#introduction"><Logo /></HashLink>
                    <div className="navbar-buttons">
                        <HashLink to="#about"><NavbarButton text="About" /></HashLink>
                        <HashLink to="#projects"><NavbarButton text="Projects" /></HashLink>
                        <HashLink to="#experience"><NavbarButton text="Experience" /></HashLink>
                        <a href="https://drive.google.com/file/d/1QeutaYQsNSi8Ag-XIKQqpzvRitHjXvNd/view" target="_blank"><NavbarButton text="Resume" /></a>
                        <a href="https://github.com/noahkester" target="_blank"><NavbarButton text="Github" /></a>
                    </div>
                    <a href="mailto:noahkester35@gmail.com"><div className="navbar-main-button">
                        <MainButton text="Contact Me" />
                    </div></a>
                </div>
                <Line />
            </div>
        );
    }
    else {
        return (
            <div className="navbar-container" data-aos="fade-down">
                <div className="navbar">
                    <Logo />
                    <MenuIcon />
                </div>
                <Menu />
                <Line />
            </div >
        );
    }
}

export { Navbar, NavbarButton };