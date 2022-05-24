import './style/Navbar.css';
import logo from '../images/logo.svg';
import MainButton from './MainButton';
import Line from './Line'
import { HashLink } from 'react-router-hash-link';

function Logo() {
    return (
        <div>
            <img className="logo" src={logo} />
        </div>
    );
}
function NavbarButton(props) {
    return (
        <div className="navbar-button">
            {props.text}
        </div>
    );
}
function Navbar() {
    return (
        <div className="navbar-container" data-aos="fade-down">
            <div className="navbar">
                <HashLink to="#introduction"><Logo /></HashLink>
                <div className="navbar-buttons">
                    <HashLink to="#about"><NavbarButton text="About" /></HashLink>
                    <HashLink to="#projects"><NavbarButton text="Projects" /></HashLink>
                    <HashLink to="#experience"><NavbarButton text="Experience" /></HashLink>
                    <a href="https://drive.google.com/file/d/1DE_MTPatiesGq4sZ4Myum7rGueWTjIW1/view" target="_blank"><NavbarButton text="Resume" /></a>
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

export { Navbar, NavbarButton };