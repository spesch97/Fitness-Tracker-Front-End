import React from "react";
import { useEffect, useState } from "react";
import { deleteRoutinesFromProfile, fecthUsersRoutines } from "../api";
import Logout from "../components/Logout";
import PatchRoutine from "../components/PatchRoutine";

const Profile = ({ setToken, token, username, setUsername }) => {
  const [profiles, setProfiles] = useState([]);
  const [routineId, setRoutineId] = useState("");

  useEffect(() => {
    const getProfiles = async () => {
      const fetchedUserRoutines = await fecthUsersRoutines(token, username);
      setProfiles(fetchedUserRoutines);
    };
    getProfiles();
  }, [token, username]);

  return (
    <>
      <h1 className="subtitle">Welcome {username}!</h1>
      <Logout token={token} setToken={setToken} setUsername={setUsername} />
      {routineId ? (
        <PatchRoutine
          setRoutineId={setRoutineId}
          token={token}
          routineId={routineId}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      ) : null}
      {profiles.length < 1 ? (
        <h6> Please create a routine to have your routines display here</h6>
      ) : (
        profiles.map((profile) => {
          const profileId = profile.id;
          return (
            <div className="postContainer" key={profileId}>
              <h3>{profile.name}</h3>
              <h6> Goal:</h6>
              <h6>{profile.goal}</h6>
              <h6>Public:</h6>
              {profile.isPublic = true ? <h6>yes</h6> : <h6>no</h6>}
              {profile.activity
                ? profile.activity.map((activity) => {
                    return (
                      <>
                        <h6>Activites</h6>
                        <h6>{activity.name}</h6>
                      </>
                    );
                  })
                : null}
              <button
                className="button"
                type="button"
                onClick={async () => {
                  deleteRoutinesFromProfile(
                    token,
                    profileId,
                    profiles,
                    setProfiles
                  );
                }}
              >
                Delete
              </button>
              <button
                className="button"
                type="button"
                onClick={() => setRoutineId(profileId)}
              >
                Edit
              </button>
              <button
                className="button"
                type="button"
                onClick={async () => {
                  deleteRoutinesFromProfile(
                    token,
                    profileId,
                    profiles,
                    setProfiles
                  );
                }}
              >
                Add Activity
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default Profile;
