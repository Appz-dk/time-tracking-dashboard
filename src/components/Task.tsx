import elipses from "/images/icon-ellipsis.svg";

type TrackingData = {
  current: number;
  previous: number;
};

type TrackingTimeframes = {
  daily: TrackingData;
  weekly: TrackingData;
  monthly: TrackingData;
};

type TaskProps = {
  title: string;
  trackingData: TrackingTimeframes;
  view: "daily" | "weekly" | "monthly";
  icon: string;
};

const Task: React.FC<TaskProps> = ({ title, trackingData, view, icon }) => {
  const taskClrs: Record<string, string> = {
    Work: "hsl(15, 100%, 70%)",
    Play: "hsl(195, 74%, 62%)",
    Study: "hsl(348, 100%, 68%)",
    Exercise: "hsl(145, 58%, 55%)",
    Social: "hsl(264, 64%, 52%)",
    "Self Care": "hsl(43, 84%, 65%)",
  };

  return (
    <div className="task__container" style={{ backgroundColor: taskClrs[title] }}>
      <figure>
        <img src={icon} alt="Svg that matches the task" />
      </figure>
      <div className="task__info">
        <div className="task__title">
          <p>{title}</p>
          <figure>
            <img src={elipses} alt="options button" />
          </figure>
        </div>
        <div className="task__tracking">
          <p>{trackingData[view].current}hrs</p>
          <p>
            {view === "daily"
              ? "Yesterday"
              : `Last ${view.charAt(0).toUpperCase() + view.slice(1, -2)}`}
            {` - ${trackingData[view].previous}hrs`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
