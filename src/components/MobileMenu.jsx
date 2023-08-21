/* eslint-disable react/prop-types */
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./MobileMenuStyles.css";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function changeSideBar(currentIsOpen) {
    setIsOpen(!currentIsOpen);
  }

  function closeSideBar() {
    setIsOpen(false);
  }

  function SideBarLink(props) {
    return (
      <li>
        <a href={props.link} onClick={() => closeSideBar(isOpen)}>
          {props.children}
        </a>
      </li>
    );
  }

  return (
    <div className="hamburger-btn">
      {isOpen ? (
        <MdClose onClick={() => changeSideBar(isOpen)}></MdClose>
      ) : (
        <RxHamburgerMenu onClick={() => changeSideBar(isOpen)}></RxHamburgerMenu>
      )}
      <div className="side-panel" data-panel-open='1'>
        <ul>
          <SideBarLink link="#about" className="side-bar-link">
            About Me
          </SideBarLink>
          <SideBarLink link="#projects" className="side-bar-link">
            Projects
          </SideBarLink>
          <SideBarLink link="#education" className="side-bar-link">
            Education
          </SideBarLink>
          <SideBarLink link="#experiences" className="side-bar-link">
            Experiences
          </SideBarLink>
          <SideBarLink link="#resume" className="side-bar-link">
            Resume
          </SideBarLink>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
