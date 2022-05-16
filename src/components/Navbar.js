import './style/Navbar.css';
import logo from '../images/logo.svg'
import MainButton from './MainButton';
import Line from './Line'

function Logo() {
    var reload = () => {
        //window.location.reload(false);
    }
    return (
        <div onClick={reload}>
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
        <div className="navbar-container">
            <div className="navbar">
                <a href="#introduction"><Logo /></a>
                <div className="navbar-buttons">
                    <a href="#about"><NavbarButton text="About" /></a>
                    <a href="#projects"><NavbarButton text="Projects" /></a>
                    <NavbarButton text="Experience" />
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRzSNC9u-tXyWwIpJhhx-4UPQg-TrwBSCkvia6_qha3Y8S4R0PfPw6GhCniDP2ZbljqaxYbn709QIZm/pub" target="_blank"><NavbarButton text="Resume" /></a>
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

export {Navbar, NavbarButton};