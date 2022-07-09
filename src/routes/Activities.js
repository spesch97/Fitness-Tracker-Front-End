import React from "react";
import { useState, useEffect } from "react";
import { fetchAllActivities } from "../api";


const Activities = ({ token, username }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const fetchedActivities = await fetchAllActivities();
      setActivities(fetchedActivities);
    };
    getActivities();
  }, []);

  return (
    <>
      
      {activities.map((activity) => {
        const activityId = activity.id;
        return (
          <div className="postContainer" key={activityId}>
            <h3>{activity.name}</h3>
            <h6>Description</h6>
            <h5>{activity.description}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Activities;