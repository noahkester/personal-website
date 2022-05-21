import './style/About.css';
import picture from '../images/picture.png'
import MainButton from './MainButton';

function ProfileImage() {
    return (
        <div>
            <img className="profile-image" src={picture} />
        </div>
    )
}

function About() {
    return (
        <div id="about" className="about">
            <div className="general-container about-container" data-aos="fade-right">
                <ProfileImage />
            </div>
            <div className="about-text" data-aos="fade-left">
                <div className="subheading-text">About Me</div>
                <div className="description-text">My interests include full-stack engineering, web-dev, mobile computing, blockchain, and technical project management.</div>
                <div className="description-text" style ={{"paddingTop": "10px"}}>I enjoy breaking down difficult concepts into manageable steps and have a passion for transforming products from ideas to reality.</div>

                <div className="about-text-element"><a href="https://www.linkedin.com/in/noah-kester/" target="_blank"><MainButton text="LinkedIn" /></a></div>
            </div>
        </div>
    )
}
export default About;
