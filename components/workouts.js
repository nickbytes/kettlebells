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
      return (
        <div
          style={{
            marginBottom: "50px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "blue"
          }}
        >
          Rest
        </div>
      );
  }
}

export function Workouts() {
  return (
    <div>
      {WORKOUT_DATA.map((workout, i) => (
        <div
          key={i}
          style={{
            borderTop: "1px solid #eaeaea",
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
          id={`day-${workout.day}`}
        >
          <h2 style={{ fontSize: "48px" }}>Day {workout.day}</h2>
          <div
            style={{
              alignItems: "flex-start",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            {workout.exercises.length ? (
              workout.exercises.map((ex, i) => (
                <div
                  key={i}
                  style={{
                    flexBasis: "50%",
                    flexShrink: "0",
                    marginBottom: "50px",
                    paddingRight: "15px"
                  }}
                >
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
          <button onClick={() => window.scrollTo(0, 0)}>Top ↑</button>
        </div>
      ))}
    </div>
  );
}
