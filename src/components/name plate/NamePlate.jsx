import "./NamePlateStyles.css";

function NamePlate() {
  return (
    <>
      <div className="name-plate">
        <img src="Mountain Background.png" alt="Mountain Backdrop" />
        <div className="name-plate-text">
          <h2>Hello! my name is</h2>
          <h1>Trishu Patel</h1>
          <ul className="links">
            <li>
              <a href="#contact">Get in Touch</a>
            </li>
            <li>
              <a href="Trishu Patel Resume.pdf">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NamePlate;
