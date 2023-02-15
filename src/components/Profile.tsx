import { useState } from "react";
import profilePic from "../images/image-jeremy.png";
import { isView, View } from "./Dashboard";

// "pretent this is a request to the backend"
const profile = {
  name: "Jeremy Robson",
};

const actions = ["Daily", "Weekly", "Monthly"];

type ProfileProps = {
  handleViewChange: (view: View) => void;
};

const Profile: React.FC<ProfileProps> = ({ handleViewChange }) => {
  const [showTimeframe, setShowTimeframe] = useState(actions[1]);

  const handleTimeframeChange = (action: string) => {
    setShowTimeframe(action);
    const view = action.toLowerCase();
    if (isView(view)) {
      handleViewChange(view);
    }
  };

  return (
    <div className="profile__container">
      <div className="profile__info">
        <figure>
          <img src={profilePic} alt="Rounded profile image" />
        </figure>
        <div className="profile_title">
          <p>Report for</p>
          <h1>{profile.name}</h1>
        </div>
      </div>
      <div className="profile__actions">
        <ul>
          {actions.map((action) => (
            <li key={action}>
              <button
                aria-selected={showTimeframe === action ? true : false}
                onClick={() => handleTimeframeChange(action)}
              >
                {action}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
