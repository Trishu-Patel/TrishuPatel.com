import { useState } from "react";
import "./NavBarStyles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import NavLinks from './NavLinks'

export default function NavBar() {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const changeSideBar = (currentSideBar) => setSideBarVisible(!currentSideBar);

  const closeSideBar = () => setSideBarVisible(false);

  return (
    <nav>
      <a className="title" href="https://trishupatel.com">TrishuPatel.com</a>
      <NavLinks className="deck-top-view"></NavLinks>
      {sideBarVisible ? (
        <CgClose
          className="hamburger-btn"
          onClick={() => changeSideBar(sideBarVisible)}
        ></CgClose>
      ) : (
        <RxHamburgerMenu
          className="hamburger-btn"
          onClick={() => changeSideBar(sideBarVisible)}
        ></RxHamburgerMenu>
      )}

      {
        sideBarVisible && <div className="side-bar">
            <NavLinks closeSideMenu={closeSideBar}/>
        </div>
      }

    </nav>
  );
}
