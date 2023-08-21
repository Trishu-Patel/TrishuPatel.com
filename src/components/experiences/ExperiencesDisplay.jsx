import { useState } from "react";
import "./ExperienceDisplayStyles.css";

/* eslint-disable react/prop-types */
export default function ExperiencesDisplay() {
  const [currentExperience, setCurrentExperience] = useState("robotics");
  return (
    <>
      <div className="experience-title-section" id="experience">
        <h1 className="experience-title">Experiences</h1>
        <div className="experience-selector-container">
          <input
            value="robotics"
            name="experience-selector"
            type="radio"
            id="robotics-radio"
            onChange={(e) => setCurrentExperience(e.target.value)}
            defaultChecked="checked"
          />
          <label
            htmlFor="robotics-radio"
            className={currentExperience == "robotics" && "active"}
          >
            First Robotics
          </label>
          <input
            value="TJFuel"
            name="experience-selector"
            type="radio"
            id="TJFuel-radio"
            onChange={(e) => setCurrentExperience(e.target.value)}
          />
          <label
            htmlFor="TJFuel-radio"
            className={currentExperience == "TJFuel" && "active"}
          >
            TJ Fuel
          </label>
          <input
            value="hack4impact"
            name="experience-selector"
            type="radio"
            id="Hack4Impact-radio"
            onChange={(e) => setCurrentExperience(e.target.value)}
          />
          <label
            htmlFor="Hack4Impact-radio"
            className={currentExperience == "hack4impact" && "active"}
          >
            Hack4Impact
          </label>
        </div>

        <div className="experiences-container">
          {currentExperience == "TJFuel" && (
            <Experience
              job="TJ Fuel (Gas Station)"
              title="Cashier"
              timeline="May 2019 - July 2023"
            > 
              <ul>
              <ExperienceDescription>Served over 130 costumers per shift (drive thru/front counter)</ExperienceDescription>
                <ExperienceDescription>Maintained records of inventory</ExperienceDescription>
                <ExperienceDescription>Learned how to grow a small business</ExperienceDescription>
                <ExperienceDescription>Currently developing a user-friendly website to better track the sale of lottery tickets</ExperienceDescription>
              </ul>
            </Experience>
          )}

          {currentExperience == "robotics" && (
            <Experience
              job="First Robotics"
              title="Design leader / Team Captain"
              timeline="August 2018 - July 2022"
            >
              <ul>
              <ExperienceDescription>
                  Held a leadership position for 3 years (1 year a department
                  leader and 2 as Team Captain)
                </ExperienceDescription>
                <ExperienceDescription>
                  Worked closely with a variety of teams to build 4 robot that
                  competed in regional tournaments.
                </ExperienceDescription>
                <ExperienceDescription>
                  Designed, Programmed, and Built 10 robots over 4 years
                </ExperienceDescription>
                <ExperienceDescription>
                  Taught several student computer aided design with Solidworks
                </ExperienceDescription>
              </ul>
            </Experience>
          )}
          {currentExperience == "hack4impact" && (
            <Experience
              job="Hack4Impact"
              title="Developer"
              timeline="August 2023 - Present"
            >
              <ul>
                <ExperienceDescription>I have recently taken up this role, so keep an eye out see
                    what I will create!</ExperienceDescription>
              </ul>
            </Experience>
          )}
        </div>
      </div>
    </>
  );
}

function Experience(props) {
  return (
    <div className="experience">
      <h1>{props.job}</h1>
      <h2>{props.title}</h2>
      <h2>{props.timeline}</h2>
      <p>{props.children}</p>
    </div>
  );
}

function ExperienceDescription(props) {
  return (
    <li>
      <p>{props.children}</p>
    </li>
  );
}
