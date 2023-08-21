import "./ProjectDisplayStyles.css"

/* eslint-disable react/prop-types */
function ProjectDisplay(){
    return(
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <Project title="Auto Sudoku" bubbles={["Python", "OCR", "OpenCV", "PyAutoGUI"]}>
                Auto Sudoku is a python script that automatically solve Sodoku puzzles on Sudoku.com.
                It uses optical character recognition to extracts the numbers from a screenshot of a Sudoku board.
                It is then able to solve the Sudoku using a recursive backtracking algorithm.
                Average Time to solve a board: ~~~
            </Project>
            <Project title="Robo Dino" bubbles={["Python", "OpenCV", "PyAutoGUI"]}>
                Robo Dino is a python script that automatically plays Google
                Dinosaurs Game. It takes screenshot from the game, preform image
                processing techniques with OpenCV, and automatically makes the Dino
                jump and dodge obstacle. Current High Score: ~~~
            </Project>
            <Project title="Portfolio Website" bubbles={["React", "JavaScript", "HTML", "CSS"]}>
                This Website is still a work in process. Stay Tuned to see what I will be up to.
            </Project>
            <div className="project"></div>
            <div className="project"></div>
      </div>
    )
}

function Project(props){
    return (
        <div className="project">
        <h1>{props.title}</h1>
        <p>{props.children}</p>
        <div className="bubbles">
            {props.bubbles.map(bubble => {
                return <Bubble key={crypto.randomUUID()}>{bubble}</Bubble>
            })}
        </div>
        <div className="external-links">
          <img className="github-link" src="src\assests\github-mark-white.png" alt="github link"/>
          <img className="github-link" src="src\assests\external-link.png" alt="external link"/>
        </div>
      </div>
    )
}

function Bubble(props) {
    return  <div className="bubble">{props.children}</div>
}

export default ProjectDisplay