import React from "react";
import { useEffect, useState } from "react";
import { fecthUsersRoutines } from "../api";
import Logout from "../components/Logout";

const Profile = ({ setToken, token, username, setUsername }) => {
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    const getProfiles = async () => {
      const fetchedUserRoutines = await fecthUsersRoutines(username);
      setProfiles(fetchedUserRoutines);
    };
    getProfiles();
  }, []);

  return (
    <>
    <h1 className="subtitle">Welcome {username}!</h1>
      <Logout token={token} setToken={setToken} setUsername={setUsername} />
      {/* { if (profiles) {
        (profiles.map((profile) => {
          const profileId = profile.id;
          return (
            <div className="postContainer" key={profileId}>
              <h3>{profile.name}</h3>
              <h6> Goal</h6>
              <h5>{profile.goal}</h5>
            </div>
          );
        }))
      } else {
        return <h6>Create a routine to start</h6>>
      } */}
    </>
  );
};

export default Profile
