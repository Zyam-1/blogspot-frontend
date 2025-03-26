import logo from "./logo.svg";
import "./App.css";
import TopMenu from "./components/TopMenu";
import Blog from "./components/blogs/Blogs";
import SingleBlogComplete from "./components/blogs/SingleBlogComplete";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <TopMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="blogs/:blogID" element={<SingleBlogComplete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
