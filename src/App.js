import './App.css';
import Home from './Home';
import Flipboard_Blog from './FlipboardBlog';
import AwesomeMix_Blog from './AwesomeMixBlog';
import Website_Blog from './WebsiteBlog';
import MiningRig_Blog from './MiningRigBlog';
import Tuktuk_Blog from './TuktukBlog';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flipboard-blog" element={<Flipboard_Blog />} />
        <Route path="awesome-mix-blog" element={<AwesomeMix_Blog />} />
        <Route path="website-blog" element={<Website_Blog />} />
        <Route path="mining-rig-blog" element={<MiningRig_Blog />} />
        <Route path="tuktuk-blog" element={<Tuktuk_Blog />} />
      </Routes>
    </div>
  );
}

export default App;
