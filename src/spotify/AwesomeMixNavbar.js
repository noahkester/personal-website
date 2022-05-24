import { NavbarButton } from "../components/Navbar"
import MainButton from "../components/MainButton";
import Line from "../components/Line"
import logo from '../images/logo.svg';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

function Logo() {
    return (
        <Link to="/">
            <img className="logo" src={logo} />
        </Link>
    );
}
function AwesomeMixNavbar() {
    return (
        <div className="navbar-container flipboard-navbar" data-aos="fade-down">
            <div className="navbar">
                <Logo />
                <div className="navbar-buttons">
                    <HashLink to="#awesome-setup"><NavbarButton text="Setup" /></HashLink>
                    <HashLink to="#awesome-client"><NavbarButton text="Client" /></HashLink>
                    <HashLink to="#awesome-server"><NavbarButton text="Server" /></HashLink>
                </div>
                <div className="navbar-main-button">
                    <MainButton text="Github" />
                </div>
            </div>
            <Line />
        </div>
    );
}

export default AwesomeMixNavbar;
