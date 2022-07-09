import React from "react";
import { useState, useEffect } from "react";
import { deleteRoutine, fetchAllRoutines } from "../api";

const Posts = ({ token, username }) => {
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
      {routines.map((routine) => {
        const routineId = routine.id;
        return (
          <div className="postContainer" key={routineId}>
            <h3>{routine.name}</h3>
            <h5 className="textBlue">Created By: {routine.creatorName}</h5>
            <h5 className="textBlue">Goal: {routine.goal}</h5>
            {routine.creatorName === username ? (
              <button
                className="button"
                type="button"
                onClick={async () => {
                  deleteRoutine(token, routineId, routines, setRoutines);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Posts;
