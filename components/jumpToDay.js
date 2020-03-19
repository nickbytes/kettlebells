import React from "react";
import { WORKOUT_DATA } from "../data/workout";

export function JumpToDay() {
  return (
    <div style={{ maxWidth: "38em" }}>
      <p>Jump to Day:</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {" "}
        {WORKOUT_DATA.map(d => (
          <span
            style={{
              marginLeft: "8px",
              marginRight: "8px",
              marginBottom: "8px"
            }}
          >
            <a href={`#day-${d.day}`}>{d.day}</a>
          </span>
        ))}
      </div>
    </div>
  );
}
