import Profile from "./Profile";
import Tasks from "./Tasks";

const Dashboard = () => {
  return (
    <section className="dashboard__container">
      <Profile />
      <Tasks />
    </section>
  );
};

export default Dashboard;
