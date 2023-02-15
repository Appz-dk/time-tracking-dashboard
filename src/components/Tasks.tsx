import taskData from "../../data.json";
import Task from "./Task";

// icons
import exercise from "../images/icon-exercise.svg";
import play from "../images/icon-play.svg";
import selfcare from "../images/icon-selfcare.svg";
import social from "../images/icon-social.svg";
import work from "../images/icon-work.svg";
import study from "../images/icon-study.svg";
import { View } from "./Dashboard";

const iconsObj: Record<string, string> = {
  Exercise: exercise,
  Play: play,
  "Self Care": selfcare,
  Social: social,
  Work: work,
  Study: study,
};

const Tasks: React.FC<{ view: View }> = ({ view }) => {
  return (
    <>
      {taskData.map((task) => (
        <Task
          key={task.title}
          icon={iconsObj[task.title]}
          title={task.title}
          trackingData={task.timeframes}
          view={view}
        />
      ))}
    </>
  );
};

export default Tasks;
