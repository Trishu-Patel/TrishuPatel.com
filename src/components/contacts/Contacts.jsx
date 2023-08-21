import "./ContactsStyles.css";
import { AiOutlineMail, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Contacts() {
  return (
    <div className="contacts-container" id="contact">
      <h1>Contact Info</h1>
      <p>If you want to get in touch, just follow these links: </p> 
      <div className="external-links">
        <a href="mailto: pateltrishu28@gmail.com" className="img-link">
          <AiOutlineMail></AiOutlineMail>
        </a>
        <a href="https://www.linkedin.com/in/trishupatel/" className="img-link">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href="https://www.instagram.com/not_trishu/" className="img-link">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
      </div>
    </div>
  );
}
