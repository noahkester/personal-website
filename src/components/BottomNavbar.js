import "./style/BottomNavbar.css"
import MainButton from "./MainButton";
import Line from "./Line";
function BottomNavbar() {
    return (
        <div data-aos="fade-up">
            <Line />
            <div className="bottom-navbar">
                <div className="bottom-navbar-element">
                    <div className="small-subheading-text contact-info">Noah Kester</div>
                    <div className="small-description-text contact-info">Full Stack Developer</div>
                    <div className="small-description-text contact-info">noahkester35@gmail.com</div>
                    <div className="small-description-text contact-info">Austin, TX</div>
                </div>
                <div className="more-info">
                    <div className="small-subheading-text bottom-navbar-element">Want to know more about me?</div>
                    <img
                        src={require("../images/arrow.png")}
                        className="arrow"
                    />
                </div>
                <div className="bottom-navbar-element">
                    <a href="mailto:noahkester35@gmail.com"><MainButton text="Lets Chat!" /></a>
                </div>
            </div>
        </div>
    );
}
export default BottomNavbar;