import './App.css';
import Home from './Home';
import FlipboardBlog from './flipboard/FlipboardBlog';
import AwesomeMixBlog from './spotify/AwesomeMixBlog';
import WebsiteBlog from './WebsiteBlog';
import MiningRigBlog from './MiningRigBlog';
import useWindowDimensions from './windowDimensions';
import PGNAppBlog from './PGNApp';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  // width > 1064
  const { height, width } = useWindowDimensions();
  if (width > 0) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flipboard-blog" element={<FlipboardBlog />} />
          <Route path="awesome-mix-blog" element={<AwesomeMixBlog />} />
          <Route path="website-blog" element={<WebsiteBlog />} />
          <Route path="mining-rig-blog" element={<MiningRigBlog />} />
          <Route path="pgn-app-blog" element={<PGNAppBlog />} />
        </Routes>
      </div>
    );
  }
  else {
    return (
      <div className="mobile-screen">
        <img src={require("./images/mobile.png")} className="wrench" />
        <div className="small-subheading-text">Mobile Version still in development!</div>
        <div className="small-subheading-text">Try viewing on larger screen</div>
      </div>
    )
  }
}

export default App;
