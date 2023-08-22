import "./ProjectDisplayStyles.css";
import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

/* eslint-disable react/prop-types */
function ProjectDisplay() {
  return (
    <div className="projects" id="project">
      <h1>Projects</h1>
      <Project
        title="Auto Sudoku"
        bubbles={["Python", "OCR", "OpenCV", "PyAutoGUI"]}
        github="https://github.com/Trishu-Patel/Auto_Sudoku"
        link=""
      >
        Auto Sudoku is a python script that automatically solve Sudoku puzzles
        on Sudoku.com. It uses optical character recognition to extracts the
        numbers from a screenshot of a Sudoku board. It then performs a
        recursive backtracking algorithm to solve the Sudoku board. Average Time
        to solve a board: 34 sec
      </Project>
      <Project
        title="Portfolio Website"
        bubbles={["React", "JavaScript", "HTML", "CSS"]}
        github="https://github.com/Trishu-Patel/TrishuPatel.com"
        link="https://www.trishupatel.com/"
      >
        This Website is still a work in process. Stay Tuned to see what I will
        be up to.
      </Project>
      <Project
        title="Minesweeper"
        bubbles={["JavaScript", "HTML", "CSS", "Algorithms"]}
        github="https://github.com/Trishu-Patel/Minesweeper_Website"
        link="https://trishu-patel.github.io/Minesweeper_Website/"
      >
        This Website is a recreation of the classic microsoft minesweeper. This
        program uses some object-oriented programming techniques to manipulate
        the board. It also is configurable to play a game of Minesweeper of any
        size board and number of mines.
      </Project>
      <Project
        title="Robo Dino"
        bubbles={["Python", "OpenCV", "PyAutoGUI"]}
        github="https://github.com/Trishu-Patel/Robo_Dino"
        link=""
      >
        Robo Dino is a python script that automatically plays Google&#180;s
        Dinosaurs Game. It takes screenshot from the game, preform image
        processing techniques with OpenCV, and automatically makes the Dino jump
        and dodge obstacle. Current High Score: 2310
      </Project>
      <Project
        title="Game of Life"
        bubbles={["JavaScript", "HTML", "CSS", "OOP"]}
        github="https://github.com/Trishu-Patel/Game_Of_Life"
        link=""
      >
        This Website is a simulation of a zero-player game, Conway&#180;s Game
        of Life. This website lets your create initial conditions of the
        simulation and lets you see how they will play out.
      </Project>
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <a href={props.github}>
        <h1>{props.title}</h1>
      </a>
      <p>{props.children}</p>
      <div className="bubbles">
        {props.bubbles.map((bubble) => {
          return <Bubble key={crypto.randomUUID()}>{bubble}</Bubble>;
        })}
      </div>
      <div className="external-links">
        <a href={props.github}>
          <AiFillGithub className="link"></AiFillGithub>
        </a>
        {props.link != "" && (
          <a href={props.link}>
            <LuExternalLink className="link"></LuExternalLink>
          </a>
        )}
      </div>
    </div>
  );
}

function Bubble(props) {
  return <div className="bubble">{props.children}</div>;
}

export default ProjectDisplay;
