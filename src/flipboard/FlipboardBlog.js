import { Flipboard } from "./Flipboard"
import FlipboardNavbar from "./FlipboardNavbar"

function FlipboardBlog() {
    return (
        <div>
            <FlipboardNavbar />
            <div className="flipboard">
                <div className="flipboard-display">
                    <Flipboard />
                    <div id="flipboard-row-0" className="flipboard-hide-row"></div>
                    <div id="flipboard-row-1" className="flipboard-hide-row"></div>
                    <div id="flipboard-row-2" className="flipboard-hide-row"></div>
                    <div id="flipboard-row-3" className="flipboard-hide-row"></div>
                    <div id="flipboard-row-4" className="flipboard-hide-row"></div>
                    <div className="flipboard-background"></div>
                </div>
            </div>
        </div>
    );
}

export default FlipboardBlog;
