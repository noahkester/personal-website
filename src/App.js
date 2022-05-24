import './App.css';
import Home from './Home';
import FlipboardBlog from './flipboard/FlipboardBlog';
import AwesomeMixBlog from './spotify/AwesomeMixBlog';
import WebsiteBlog from './WebsiteBlog';
import MiningRigBlog from './MiningRigBlog';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flipboard-blog" element={<FlipboardBlog />} />
        <Route path="awesome-mix-blog" element={<AwesomeMixBlog />} />
        <Route path="website-blog" element={<WebsiteBlog />} />
        <Route path="mining-rig-blog" element={<MiningRigBlog />} />
      </Routes>
    </div>
  );
}

export default App;
