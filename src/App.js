import './App.css';
import Home from './Home';
import FlipboardBlog from './flipboard/FlipboardBlog';
import AwesomeMixBlog from './spotify/AwesomeMixBlog';
import Website_Blog from './WebsiteBlog';
import MiningRig_Blog from './MiningRigBlog';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flipboard-blog" element={<FlipboardBlog />} />
        <Route path="awesome-mix-blog" element={<AwesomeMixBlog />} />
        <Route path="website-blog" element={<Website_Blog />} />
        <Route path="mining-rig-blog" element={<MiningRig_Blog />} />
      </Routes>
    </div>
  );
}

export default App;
