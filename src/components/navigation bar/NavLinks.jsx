import PropTypes from 'prop-types';

export default function NavLinks({ closeSideMenu }) {

  return (
    <ul>
      <li>
        <a onClick={() => closeSideMenu()} href='#about'>About Me</a>
      </li>
      <li>
        <a onClick={() => closeSideMenu()} href='#experience'>Experiences</a>
      </li>
      <li>
        <a onClick={() => closeSideMenu()} href='#project'>Projects</a>
      </li>
      <li>
        <a onClick={() => closeSideMenu()} href='#contact'>Contacts</a>
      </li>
      <li>
        <a onClick={() => closeSideMenu()} href="Trishu Patel Resume.pdf">Resume</a>
      </li>
    </ul>
  );
}

NavLinks.propTypes = {
  closeSideMenu: PropTypes.object
}