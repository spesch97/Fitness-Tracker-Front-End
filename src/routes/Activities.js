import React from "react";
import { useState, useEffect } from "react";
import { fetchAllActivities } from "../api";
import PatchActivity from "../components/PatchActivity";

const Activities = ({ token }) => {
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      const fetchedActivities = await fetchAllActivities();
      setActivities(fetchedActivities);
    };
    getActivities();
  }, []);

  return (
    <>
      <h2>Activities</h2>
      {activityId ? (
        <PatchActivity
          token={token}
          activityId={activityId}
          setActivityId={setActivityId}
          setActivities={setActivities}
          activities={activities}
        />
      ) : null}
      <div className="activitiesContainer">
        {activities.map((activity) => {
          return (
            <div className="activityContainer" key={activity.id}>
              <h3>{activity.name}</h3>
              <div className="rowContainer">
                <h6>Activity Id:</h6>
                <h6>{activity.id}</h6>
              </div>
              <div className="rowContainer">
                <h6>Description:</h6>
                <h6>{activity.description}</h6>
              </div>
              {token ? (
                <button
                  className="button"
                  type="button"
                  onClick={() => setActivityId(activity.id)}
                >
                  Edit
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;
