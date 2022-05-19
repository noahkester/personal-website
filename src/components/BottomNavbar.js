import "./style/BottomNavbar.css"
import MainButton from "./MainButton";
import Line from "./Line";
function BottomNavbar() {
    return (
        <div>
            <Line />
            <div className="bottom-navbar">
                <div className="bottom-navbar-element">
                    <div className="small-subheading-text">Noah Kester</div>
                    <div className="small-description-text">Full Stack Developer</div>
                    <div className="small-description-text">noahkester35@gmail.com</div>
                    <div className="small-description-text">Austin, TX</div>
                </div>
                <div className="small-subheading-text bottom-navbar-element">Want to know more about me? -></div>
                <div className="bottom-navbar-element">
                    <a href="mailto:noahkester35@gmail.com"><MainButton text="Lets Chat!" /></a>
                </div>
            </div>
        </div>
    );
}
export default BottomNavbar;