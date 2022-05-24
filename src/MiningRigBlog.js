import construction from "./images/brickwall.png"
import "./App.css"
function MiningRigBlog() {
    return (
        <div className="construction">
            <img src={construction} style={{ "width": "200px" }} />
            <div className="subheading-text">Under Construction!</div>
            <div className="description-text">Check Back Later!</div>
        </div>
    );
}

export default MiningRigBlog;
