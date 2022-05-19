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
                <div className="description-text">My interests include full-stack engineering, web-dev, mobile computing, blockchain, and technical project management. I have a passion for leading teams through the full development process for products from start to finish. I am a strong believer in the Feynman technique and love the quote “Simplicity is the ultimate sophistication”. I apply this principle with everything I create and love breaking down difficult concepts into manageable steps.</div>
                <div className="about-text-element"><a href="https://www.linkedin.com/in/noah-kester/" target="_blank"><MainButton text="LinkedIn" /></a></div>
            </div>
        </div>
    )
}
export default About;