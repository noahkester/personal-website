import Flipboard from "./Flipboard"
import FlipboardNavbar from "./FlipboardNavbar"

function FlipboardBlog() {
    return (
        <div>
            <FlipboardNavbar />
            <div className="flipboard">
                <div className="flipboard-display">
                    <Flipboard />
                    <div id="flipboard-row-0" class="flipboard-hide-row"></div>
                    <div id="flipboard-row-1" class="flipboard-hide-row"></div>
                    <div id="flipboard-row-2" class="flipboard-hide-row"></div>
                    <div id="flipboard-row-3" class="flipboard-hide-row"></div>
                    <div id="flipboard-row-4" class="flipboard-hide-row"></div>
                    <div class="flipboard-background"></div>
                </div>
            </div>
        </div>
    );
}

export default FlipboardBlog;
