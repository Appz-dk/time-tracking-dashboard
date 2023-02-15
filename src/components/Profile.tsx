import { useState } from "react";
import profilePic from "/images/image-jeremy.png";

// "pretent this is a request to the backend"
const profile = {
  name: "Jeremy Robson",
};

const actions = ["Daily", "Weekly", "Monthly"];

const Profile = () => {
  const [showTimeframe, setShowTimeframe] = useState(actions[1]);

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
                onClick={() => setShowTimeframe(action)}
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
