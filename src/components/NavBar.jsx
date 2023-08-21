/* eslint-disable react/prop-types */
import "./NavBarStyles.css"
import MobileMenu from "./MobileMenu";

function NavBar() {
  return (
    <nav>
      <a className="site-title">TrishuPatel.com</a>
      <ul>
          <NavBarLink link="#about">About Me</NavBarLink>
          <NavBarLink link="#projects">Projects</NavBarLink>
          <NavBarLink link="#education">Education</NavBarLink>
          <NavBarLink link="#experiences">Experiences</NavBarLink>
          <NavBarLink link="#resume">Resume</NavBarLink>
      </ul>
      <MobileMenu></MobileMenu>
    </nav>
  );
}

function NavBarLink(props){
  return(
    <li>
      <a href={props.link}>{props.children}</a>
    </li>
  )
}

export default NavBar;
