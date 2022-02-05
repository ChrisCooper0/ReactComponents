import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { LoadMore } from "./components/LoadMore/LoadMore";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import OutsideClick from "./components/OutsideClick/OutsideClick";
import Accordian from "./components/Accordian/Accordian";
import { LocalStorage } from "./components/LocalStorage/LocalStorage";
import { EndlessScroll } from "./components/EndlessScroll/EndlessScroll";
import Pagination from "./components/Pagination/Pagination";
import FormExample from "./components/Form/Form";
import BackToTopButton from "./components/BackToTop/BackToTop";
import ImageFlick from "./components/ImageFlick/ImageFlick";

function App() {
  return (
    <>
      <div className="navbar">
        <Router>
          <Link to="/" className="title">
            <h1>React Components</h1>
          </Link>
          <p>
            A collection of React components, designed to be reused and
            refactored as needed
          </p>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" to="/load-more">
                  Load More
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/image-slider">
                  Image Slider
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/outside-click">
                  Outside click
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/accordian">
                  Accordian
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/local-storage">
                  Local Storage
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/endless-scroll">
                  Endless Scroll
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/pagination">
                  Pagination
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/form">
                  Form (Formik)
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/backtotop">
                  Back To Top Button
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/image-flick">
                  Image Flick
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/load-more" element={<LoadMore />} />
            <Route path="/image-slider" element={<ImageSlider />} />
            <Route path="/outside-click" element={<OutsideClick />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="/local-storage" element={<LocalStorage />} />
            <Route path="/endless-scroll" element={<EndlessScroll />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/form" element={<FormExample />} />
            <Route path="/backtotop" element={<BackToTopButton />} />
            <Route path="/image-flick" element={<ImageFlick />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
