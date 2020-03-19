import React from "react";
import { WORKOUT_DATA } from "../data/workout";

function renderSwitch(day) {
  switch (day) {
    case 33:
      return (
        <div>
          <p>Do each exercise, as many sets of 7 as you can do in 30 mins.</p>
        </div>
      );
    case 34:
      return (
        <div>
          <p>
            Challenge yourself doing some sort of aerobic exercise. See if you
            can beat your best.
          </p>
        </div>
      );
    default:
      return <div>Rest</div>;
  }
}

export function Workouts() {
  return (
    <div>
      {WORKOUT_DATA.map((workout, i) => (
        <div key={i} style={{ marginBottom: "200px" }}>
          <h1>Day {workout.day}</h1>
          <div>
            {workout.exercises.length ? (
              workout.exercises.map((ex, i) => (
                <div key={i} style={{ marginBottom: "50px" }}>
                  <h2>{ex.name}</h2>
                  <p>Sets: {ex.sets}</p>
                  <p>Reps: {ex.reps}</p>
                  <p>Rest: {ex.rest}</p>
                </div>
              ))
            ) : (
              <> {renderSwitch(workout.day)}</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
