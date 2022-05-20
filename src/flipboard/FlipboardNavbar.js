import { NavbarButton } from "../components/Navbar"
import '../components/style/Navbar.css';
import logo from '../images/logo.svg';
import MainButton from '../components/MainButton';
import Line from '../components/Line'
import { Link } from 'react-router-dom';
import "./Flipboard"

function Logo() {
    return (
        <Link to="/">
            <img className="logo" src={logo} />
        </Link>
    );
}
function AnimationDropdown() {

}
function FlipboardNavbar() {
    return (
        <div className="navbar-container" data-aos="fade-down">
            <div className="navbar">
                <Logo />
                <div className="navbar-buttons">
                    <NavbarButton text="Defaults" />
                    <NavbarButton text="Animations" />
                    <NavbarButton text="Input:" />
                    <input className="flipboard-input" type="text"></input>
                </div>
                <div className="navbar-main-button">
                    <MainButton text="Display!" />
                </div>
            </div>
            <Line />
        </div>
    );
}

export default FlipboardNavbar;