import React from "react";
import { useEffect, useState } from "react";
import { deleteRoutinesFromProfile, fecthUsersRoutines } from "../api";
import AddActivityToRoutine from "../components/AddActivityToRoutine";
import Logout from "../components/Logout";
import PatchRoutine from "../components/PatchRoutine";

const Profile = ({ setToken, token, username, setUsername }) => {
  const [profiles, setProfiles] = useState([]);
  const [routineId, setRoutineId] = useState("");
  const [addRoutineActivityId, setAddRoutineActivityId] = useState("");

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
      {addRoutineActivityId ? (
        <AddActivityToRoutine
          token={token}
          addRoutineActivityId={addRoutineActivityId}
          setAddRoutineActivityId={setAddRoutineActivityId}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      ) : null}
      {profiles.length < 1 ? (
        <h6> Please create a routine to have your routines display here</h6>
      ) : (
        profiles.map((profile) => {
          const routineId = profile.id;
          console.log(profile);
          return (
            <div className="postContainer" key={routineId}>
              <h3>{profile.name}</h3>
              <h6> Goal:</h6>
              <h6>{profile.goal}</h6>
              <h6>Public:</h6>
              {profile.isPublic ? <h6>yes</h6> : <h6>no</h6>}
              {profile.activities.length >= 1 ? (
                profile.activities.map((activity) => {
                  return (
                    <div key={activity.id}>
                      <h6>Activites</h6>
                      <h6>{activity.name}</h6>
                      <h6>Duration</h6>
                      <h6>{activity.duration}</h6>
                      <h6>Count</h6>
                      <h6>{activity.count}</h6>
                    </div>
                  );
                })
              ) : (
                <button
                  className="button"
                  type="button"
                  onClick={() => setAddRoutineActivityId(routineId)}
                >
                  Add Activity
                </button>
              )}
              <button
                className="button"
                type="button"
                onClick={async () => {
                  deleteRoutinesFromProfile(
                    token,
                    routineId,
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
                onClick={() => setRoutineId(routineId)}
              >
                Edit
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default Profile;
