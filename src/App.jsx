import "./App.css";
import NavBar from "./components/NavBar";
import NamePlate from "./components/NamePlate";
import AboutMe from "./components/AboutMe";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NamePlate></NamePlate>
      <AboutMe></AboutMe>
      <ProjectDisplay></ProjectDisplay>


      {/* <div className="contacts">
        <p>Feel Free to contact me at: <a href = "mailto: pateltrishu28@gmail.com">pateltrishu28@gmail.com</a></p>
        <p>Other ways to contact me</p>
        <a href="https://www.linkedin.com/in/trishupatel/"><img src="src\assests\linkin icon.png" alt="linkin link"/></a>
      </div>

      <div className="footer">
        <p>Created by: Trishu Patel</p>
      </div> */}
    </>
  );
}

export default App;
