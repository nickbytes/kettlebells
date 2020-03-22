import React, { useState } from "react";
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
  const [showImage, setShowImage] = useState([]);
  return (
    <div>
      {WORKOUT_DATA.map((workout, i) => (
        <div
          key={i}
          style={{
            borderTop: "1px solid #eaeaea",
            paddingTop: "20px",
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
              workout.exercises.map((ex, index) => (
                <div
                  key={index}
                  style={{
                    flexBasis: "50%",
                    flexShrink: "0",
                    marginBottom: "50px",
                    paddingRight: "15px"
                  }}
                >
                  <h2>
                    {ex.name}{" "}
                    <span
                      style={{
                        cursor: "pointer",
                        fontSize: "18px",
                        verticalAlign: "center"
                      }}
                      onClick={() => {
                        let imageArray = [...showImage];
                        if (imageArray.includes(`${ex.name}-${i}`)) {
                          imageArray = imageArray.filter(
                            i => i === `${ex.name}-${i}`
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
                      maxWidth: "300px",
                      display: showImage.includes(`${ex.name}-${i}`)
                        ? "block"
                        : "none"
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
