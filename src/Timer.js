import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";

const red = "#f54e4e";
const green = "#4aec8c";

const Timer = () => {
  const percentage = 66;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255, 255, 255, 0.75)",
        })}
      />
      <div>
        <PlayButton />
      </div>
    </div>
  );
};

export default Timer;
