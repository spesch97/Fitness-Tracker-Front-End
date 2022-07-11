import React from "react";
import { useState, useEffect } from "react";
import { fetchAllActivities } from "../api";
import PatchActivity from "../components/PatchActivity";

const Activities = ({ token, username }) => {
  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState('');

  useEffect(() => {
    const getActivities = async () => {
      const fetchedActivities = await fetchAllActivities();
      setActivities(fetchedActivities);
    };
    getActivities();
  }, []);

  return (
    <>
      {activityId ? (
        <PatchActivity
          token={token}
          activityId={activityId}
          setActivityId={setActivityId}
          setActivities={setActivities}
          activities={activities}
        />
      ) : null}
      {activities.map((activity) => {

        return (
          <div className="postContainer" key={activity.id}>
            <h3>{activity.name}</h3>
            <h6>Activity Id</h6>
            <h6>{activity.id}</h6>
            <h6>Description</h6>
            <h5>{activity.description}</h5>
            {token ?
            <button
              className="button"
              type="button"
              onClick={() => setActivityId(activity.id)}
            >
              Edit
            </button> : null }
          </div>
        );
      })}
    </>
  );
};

export default Activities;
