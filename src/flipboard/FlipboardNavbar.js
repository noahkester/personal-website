import { NavbarButton } from "../components/Navbar"
import '../components/style/Navbar.css';
import logo from '../images/logo.svg';
import MainButton from '../components/MainButton';
import Line from '../components/Line'
import { Link } from 'react-router-dom';

import { handleDisplayButton, handleAllButton, handleWaveButton } from "./Flipboard";

import "./Flipboard"

function Logo() {
    return (
        <Link to="/">
            <img className="logo" src={logo} />
        </Link>
    );
}
function FlipboardNavbar() {
    const handleClick = () => {
        handleDisplayButton();
    }
    const handleAll = () => {
        handleAllButton();
    }
    const handleWave = () => {
        handleWaveButton();
    }
    return (
        <div className="navbar-container flipboard-navbar" data-aos="fade-down">
            <div className="navbar">
                <Logo />
                <div className="navbar-buttons">
                    <div onClick={handleAll}><NavbarButton text="View All" /></div>
                    <div onClick={handleWave}><NavbarButton text="Wave" /></div>
                    <NavbarButton text="Input:" />
                    <input className="flipboard-input" id="flipboard-input" type="text"></input>
                </div>
                <div className="navbar-main-button" onClick={handleClick}>
                    <MainButton text="Display!" />
                </div>
            </div>
            <Line />
        </div>
    );
}

export default FlipboardNavbar;