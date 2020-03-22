import React, { useEffect, useState } from "react";
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
  const [completedDays, setCompletedDays] = useState([]);

  function updateCompletedDays(day) {
    let days = [...completedDays];
    if (days.includes(day)) {
      days = days.filter(d => d !== day);
    } else {
      days.push(day);
    }
    setCompletedDays(days);
    return window.localStorage.setItem("completedDays", JSON.stringify(days));
  }
  useEffect(() => {
    let compDays = JSON.parse(window.localStorage.getItem("completedDays"));
    compDays = compDays ? compDays : [];
    setCompletedDays(compDays);
  }, []);
  return (
    <div>
      {WORKOUT_DATA.map((workout, i) => (
        <div
          key={i}
          style={{
            borderTop: "1px solid #eaeaea",
            paddingTop: completedDays.includes(workout.day) ? "0" : "50px",
            paddingBottom: completedDays.includes(workout.day) ? "20px" : "50px"
          }}
          id={`day-${workout.day}`}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <span style={{ paddingRight: "10px", transform: "scale(2)" }}>
              <input
                checked={completedDays.includes(workout.day)}
                type="checkbox"
                onChange={() => updateCompletedDays(workout.day)}
              />
            </span>
            <h2
              style={{
                color: completedDays.includes(workout.day) ? "grey" : "black",
                fontSize: "48px"
              }}
            >
              Day {workout.day}
            </h2>
          </div>
          <div
            style={{
              alignItems: "flex-start",
              display: "flex",
              height: completedDays.includes(workout.day) ? "0px" : "auto",
              justifyContent: "space-between",
              overflow: "hidden"
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
