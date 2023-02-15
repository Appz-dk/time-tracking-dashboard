import { useState } from "react";
import Profile from "./Profile";
import Tasks from "./Tasks";

export type View = "daily" | "weekly" | "monthly";
export const isView = (view: string): view is View => {
  return ["daily", "weekly", "monthly"].includes(view);
};

const Dashboard = () => {
  const [view, setView] = useState<View>("weekly");

  const handleViewChange = (view: View) => {
    setView(view);
  };

  return (
    <section className="dashboard__container">
      <Profile handleViewChange={handleViewChange} />
      <Tasks view={view} />
    </section>
  );
};

export default Dashboard;
