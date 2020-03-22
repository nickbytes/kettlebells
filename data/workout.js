const GOBLET = "Goblet squat";
const SWING = "Kettlebell swing";
const ALTERNATING = "Alternating kettlebell press";
const PULLUP = "Pullup (or equivalent, like bent-over row)";

const DESC_FIVE = "5,4,3,2,1";

function A_WORKOUT({
  first_sets,
  first_reps,
  first_rest = "60 sec",
  second_sets,
  second_reps,
  second_rest = "50 secs"
}) {
  return Array.from([
    {
      name: GOBLET,
      sets: first_sets,
      reps: first_reps,
      rest: first_rest,
      image: "/workouts/goblet-squat.jpg"
    },
    {
      name: SWING,
      sets: second_sets,
      reps: second_reps,
      rest: second_rest,
      image: "/workouts/kettlebell-swing.jpg"
    }
  ]);
}

function B_WORKOUT({
  first_sets = 2,
  first_reps = DESC_FIVE,
  first_rest = "60 sec",
  second_sets = 2,
  second_reps = DESC_FIVE,
  second_rest = "30 secs"
}) {
  return Array.from([
    {
      name: ALTERNATING,
      sets: first_sets,
      reps: first_reps,
      rest: first_rest,
      image: "/workouts/kettlebell-press.png"
    },
    {
      name: PULLUP,
      sets: second_sets,
      reps: second_reps,
      rest: second_rest,
      image: "/workouts/pullup.jpg"
    }
  ]);
}

export const WORKOUT_DATA = [
  {
    day: 1,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 10,
      second_reps: 7
    })
  },
  {
    day: 2,
    exercises: B_WORKOUT({})
  },
  {
    day: 3,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 13,
      second_reps: 7
    })
  },
  {
    day: 4,
    exercises: B_WORKOUT({})
  },
  {
    day: 5,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 7,
      second_sets: 16,
      second_reps: 7
    })
  },
  {
    day: 6,
    exercises: B_WORKOUT({
      first_sets: 3,
      first_reps: "5,3,2",
      second_sets: 3,
      second_reps: "5,3,2"
    })
  },
  {
    day: 7,
    exercises: []
  },
  {
    day: 8,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 13,
      second_reps: 7
    })
  },
  {
    day: 9,
    exercises: B_WORKOUT({
      first_sets: 4,
      second_sets: 4
    })
  },
  {
    day: 10,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 16,
      second_reps: 7
    })
  },
  {
    day: 11,
    exercises: B_WORKOUT({ first_sets: 2, second_sets: 2 })
  },
  {
    day: 12,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 19,
      second_reps: 7
    })
  },
  {
    day: 13,
    exercises: B_WORKOUT({ first_sets: 4, second_sets: 4 })
  },
  {
    day: 14,
    exercises: []
  },
  {
    day: 15,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 16,
      second_reps: 7
    })
  },
  {
    day: 16,
    exercises: B_WORKOUT({ first_sets: 4, second_sets: 4 })
  },
  {
    day: 17,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 19,
      second_reps: 7
    })
  },
  {
    day: 18,
    exercises: B_WORKOUT({
      first_sets: 1,
      first_reps: "6,5,4,3,2,1",
      second_sets: 1,
      second_reps: "6,5,4,3,2,1"
    })
  },
  {
    day: 19,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 22,
      second_reps: 7
    })
  },
  {
    day: 20,
    exercises: B_WORKOUT({
      first_sets: 2,
      first_reps: "6,4,2",
      second_sets: 2,
      second_reps: "6,4,2"
    })
  },
  {
    day: 21,
    exercises: []
  },
  {
    day: 22,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 19,
      second_reps: 7
    })
  },
  {
    day: 23,
    exercises: B_WORKOUT({
      first_sets: 3,
      first_reps: "6,5,4,3,2,1",
      second_sets: 3,
      second_reps: "6,5,4,3,2,1"
    })
  },
  {
    day: 24,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 22,
      second_reps: 7
    })
  },
  {
    day: 25,
    exercises: B_WORKOUT({
      first_sets: 1,
      first_reps: "6,5,4,3,2,1",
      second_sets: 1,
      second_reps: "6,5,4,3,2,1"
    })
  },
  {
    day: 26,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 25,
      second_reps: 7
    })
  },
  {
    day: 27,
    exercises: B_WORKOUT({
      first_sets: 3,
      first_reps: "6,4,2",
      second_sets: 3,
      second_reps: "6,5,4,3,2,1"
    })
  },
  {
    day: 28,
    exercises: []
  },
  {
    day: 29,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 20,
      second_reps: 7
    })
  },
  {
    day: 30,
    exercises: B_WORKOUT({
      first_sets: 2,
      first_reps: "6,4,2",
      second_sets: 2,
      second_reps: "6,4,2"
    })
  },
  {
    day: 31,
    exercises: A_WORKOUT({
      first_sets: 3,
      first_reps: 5,
      second_sets: 10,
      second_reps: 7
    })
  },
  {
    day: 32,
    exercises: B_WORKOUT({
      first_sets: 1,
      first_reps: "6,4,2",
      second_sets: 1,
      second_reps: "6,4,2"
    })
  },
  {
    day: 33,
    exercises: []
  },
  {
    day: 34,
    exercises: []
  },
  {
    day: 35,
    exercises: []
  }
];
