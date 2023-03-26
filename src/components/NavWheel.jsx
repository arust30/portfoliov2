import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMusic,
  faHeart,
  faStar,
  faPlay,
  faFilm,
  faCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./navwheel.css";

function NavWheel() {
  const [displayText, setDisplayText] = useState("Home");

  const handleClick = (buttonNum) => {
    console.log(`clicked ${buttonNum}`);
    setDisplayText(`Button ${buttonNum} clicked`);
  };

  const icons = [
    faCoffee,
    faMusic,
    faHeart,
    faStar,
    faPlay,
    faFilm,
    faCog,
    faEnvelope,
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleItemHover = (index) => {
    setHoveredIndex(index);
  };

  const handleItemLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div class="absolute flex bottom-[35vh] w-full justify-center items-center text-center">
        <p class="text-3xl animate-shadow-glow">{displayText}</p>
      </div>

      <div class="fixed bottom-[8vh] left-[48.5%] w-16 h-16 justify-center items-center rounded-full bg-gray-200 animate-spin">
        <div className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-16 h-16 rounded-full border-2 border-gray-400 flex justify-center items-center absolute ${
                hoveredIndex === i
                  ? "hover:scale-125 hover:bg-black hover:text-white hover:animate-paused"
                  : ""
              } cursor-pointer transition-all duration`}
              style={{
                transform: `rotate(${
                  i * 45
                }deg) translate(250%, -50%) rotate(-${i * 45}deg)`,
              }}
              onMouseEnter={() => handleItemHover(i)}
              onMouseLeave={() => handleItemLeave()}
              onClick={() => handleClick(i + 1)}
            >
              <span
                className="text-2xl"
                style={{ animation: `rotateOpposite ${10}s linear infinite` }}
              >
                <FontAwesomeIcon
                  icon={icons[i]}
                  className="hover:scale-125 transition-all duration-300"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavWheel;
