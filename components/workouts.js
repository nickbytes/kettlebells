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
          <p>Run a mile as fast as you can. Walk a mile cooldown.</p>
        </div>
      );
    default:
      return (
        <div
          style={{
            marginBottom: "50px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Rest
        </div>
      );
  }
}

export function Workouts() {
  const [completedDays, setCompletedDays] = useState([]);
  const [showImage, setShowImage] = useState([]);

  function updateCompletedDays(day) {
    let days = [...completedDays];
    if (days.includes(day)) {
      days = days.filter((d) => d !== day);
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
            paddingTop: completedDays.includes(workout.day) ? "0" : "30px",
            paddingBottom: completedDays.includes(workout.day)
              ? "20px"
              : "50px",
          }}
          id={`day-${workout.day}`}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "flex-start",
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
                fontSize: "48px",
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
              overflow: "hidden",
            }}
          >
            {workout.exercises.length ? (
              workout.exercises.map((ex, index) => (
                <div
                  key={index}
                  style={{
                    flexBasis: "50%",
                    flexShrink: "0",
                    marginBottom: "50px",
                    paddingRight: "15px",
                  }}
                >
                  <h2>
                    {ex.name}{" "}
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "18px",
                        verticalAlign: "center",
                      }}
                      onClick={() => {
                        let imageArray = [...showImage];
                        if (imageArray.includes(`${ex.name}-${i}`)) {
                          imageArray = imageArray.filter(
                            (i) => i === `${ex.name}-${i}`
                          );
                        } else {
                          imageArray.push(`${ex.name}-${i}`);
                        }
                        return setShowImage(imageArray);
                      }}
                    >
                      &#9432;
                    </span>
                  </h2>
                  <div
                    style={{
                      maxWidth: "350px",
                      display: showImage.includes(`${ex.name}-${i}`)
                        ? "block"
                        : "none",
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={ex.image}
                      alt={ex.name}
                    />
                  </div>
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
