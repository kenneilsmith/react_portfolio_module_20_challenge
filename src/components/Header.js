import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>Damian Smith</h1>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
