const BASE_URL = "https://stormy-woodland-70633.herokuapp.com/api";

export const fetchRegister = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchLogin = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fecthUsersRoutines = async (token, username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewRoutine = async (token, name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutinesFromRoutines = async (
  token,
  routineId,
  routines,
  setRoutines
) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data) {
      const newRoutines = routines.filter(
        (routine) => routine.id !== routineId
      );
      setRoutines(newRoutines);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutinesFromProfile = async (
  token,
  routineId,
  profiles,
  setProfiles
) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data) {
      const newRoutines = profiles.filter(
        (routine) => routine.id !== routineId
      );
      setProfiles(newRoutines);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateRoutines = async (
  setRoutineId,
  token,
  routineId,
  profiles,
  setProfiles,
  setName,
  setGoal,
  setIsPublic,
  name,
  goal,
  isPublic
) => {
  try {
    console.log("ispublic", isPublic);

    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const data = await response.json();

    if (data) {
      const newProfile = profiles.map((profile) => {
        if (profile.id === routineId) {
          return data;
        } else {
          return profile;
        }
      });
      setProfiles(newProfile);
      setName("");
      setGoal("");
      setRoutineId("");
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateActivity = async (
  token,
  activityId,
  name,
  description,
  setActivities,
  activities,
  setActivityId,
  setName,
  setDescription
) => {
  try {
    const response = await fetch(`${BASE_URL}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const data = await response.json();

    if (data) {
      const newActivities = activities.map((activity) => {
        if (activity.id === activityId) {
          return data;
        } else {
          return activity;
        }
      });
      setActivities(newActivities);
      setName("");
      setDescription("");
      setActivityId("");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addActivity = async (
  token,
  routineId,
  activityId,
  count,
  duration,
  setCount,
  setDuration,
  setRoutineActivityId,
  profiles,
  setProfiles,
  setAddRoutineActivityId
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          routineId: routineId,
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );

    const data = await response.json();
    if (data) {
      const newProfile = profiles.map((profile) => {
        if (profile.routineId === routineId) {
          return data;
        } else {
          return profile;
        }
      });
      setProfiles(newProfile);
      setCount("");
      setDuration("");
      setRoutineActivityId("");
      setAddRoutineActivityId("");
    }
  } catch (error) {
    console.log(error);
  }
};
