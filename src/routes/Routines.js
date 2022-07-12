import React from "react";
import { useState, useEffect } from "react";
import { fetchAllRoutines } from "../api";

const Posts = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedRoutines = await fetchAllRoutines();
      setRoutines(fetchedRoutines);
    };
    getPosts();
  }, []);

  return (
    <>
      <h2>Public Routines</h2>
      <div className="activitiesContainer">
        {routines.map((routine) => {
          return (
            <div className="activityContainer" key={routine.id}>
              <h3>{routine.name}</h3>
              <h5 className="textBlue">Created By: {routine.creatorName}</h5>
              <h5 className="textBlue">Goal: {routine.goal}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
