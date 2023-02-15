import taskData from "../../data.json";
import Task from "./Task";

// icons
import exercise from "/images/icon-exercise.svg";
import play from "/images/icon-play.svg";
import selfcare from "/images/icon-selfcare.svg";
import social from "/images/icon-social.svg";
import work from "/images/icon-work.svg";
import study from "/images/icon-study.svg";

const iconsObj: Record<string, string> = {
  Exercise: exercise,
  Play: play,
  "Self Care": selfcare,
  Social: social,
  Work: work,
  Study: study,
};

const Tasks = () => {
  return (
    <>
      {taskData.map((task) => (
        <Task
          icon={iconsObj[task.title]}
          title={task.title}
          trackingData={task.timeframes}
          view="weekly"
        />
      ))}
    </>
  );
};

export default Tasks;
