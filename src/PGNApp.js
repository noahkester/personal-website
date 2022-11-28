import construction from "./images/brickwall.png"
import { NavbarButton } from "./components/Navbar"
import MainButton from "./components/MainButton";
import "./App.css"
import Line from "./components/Line"
import logo from './images/logo.svg';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

function PGNAppBlog() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="navbar-container flipboard-navbar" data-aos="fade-down">
                <div className="navbar">
                    <Link to="/">
                        <img className="logo" src={logo} />
                    </Link>
                    
                </div>
                <Line />
            </div>



            <video style={{ paddingTop: "90px", paddingBottom: "40px" }} width="1200" height="700" controls>
                <source src="/Videos/pgnappdemo.mp4" type="video/mp4" />
            </video>
            <Line />
            <div className="awesome-title awesome-blog-component" style={{ "paddingTop": "30px" }}>
                <div className="heading-text">Nexus Mobile App</div>
                <div className="description-text" style={{ "paddingTop": "10px", "textAlign": "center", marginBottom: 200 }}>The Nexus Mobile App was created to service a professional development club at UT with over 100+ active members. Features include point submisison, account creation, a networking page, events, attendance, and more. The admin view of the app is also shown in the demo above which is used to manage the users and their points as well as adjust settings and create events. Built from scratch using Expo, React Native, and Firebase</div>
            </div>
        </div >

    );
}

export default PGNAppBlog;
