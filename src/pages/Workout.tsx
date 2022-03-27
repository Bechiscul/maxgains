import { FunctionComponent } from "preact";

import { Component as AddIcon } from "../assets/icons/add.svg";
import { Link } from "../Router";
import Button from "../ui/Button";

const TEMPLATES = [
  {
    name: "Push A",
    exercises: [
      { name: "Low Fly (Cable)", sets: [1, 2, 3] },
      { name: "Bench Press (Barbell)", sets: [1, 2, 3] },
      { name: "Seated Overhead Press (Dumbbell)", sets: [1, 2, 3] },
      { name: "Chest Dip", sets: [] },
      { name: "Triceps Pushdown", sets: [] },
      { name: "Decline Crunch", sets: [] },
    ],
  },
  {
    name: "Pull A",
    exercises: [
      { name: "Pullover (Cable)", sets: [] },
      { name: "Pull Up (Band)", sets: [] },
      { name: "T-Bar Row", sets: [] },
      { name: "Lat Pulldown (Cable)", sets: [] },
      { name: "Single Arm Pulldown (Cable)", sets: [] },
      { name: "Reverse Fly (Machine)", sets: [] },
      { name: "Incline Bicep Curl (Dumbbell)", sets: [] },
      { name: "Preacher Curl (Barbell)", sets: [] },
    ],
  },
  {
    name: "Push A",
    exercises: [
      { name: "Low Fly (Cable)", sets: [1, 2, 3] },
      { name: "Bench Press (Barbell)", sets: [1, 2, 3] },
      { name: "Seated Overhead Press (Dumbbell)", sets: [1, 2, 3] },
      { name: "Chest Dip", sets: [] },
      { name: "Triceps Pushdown", sets: [] },
      { name: "Decline Crunch", sets: [] },
    ],
  },
  {
    name: "Pull A",
    exercises: [
      { name: "Pullover (Cable)", sets: [] },
      { name: "Pull Up (Band)", sets: [] },
      { name: "T-Bar Row", sets: [] },
      { name: "Lat Pulldown (Cable)", sets: [] },
      { name: "Single Arm Pulldown (Cable)", sets: [] },
      { name: "Reverse Fly (Machine)", sets: [] },
      { name: "Incline Bicep Curl (Dumbbell)", sets: [] },
      { name: "Preacher Curl (Barbell)", sets: [] },
    ],
  },
  {
    name: "Push A",
    exercises: [
      { name: "Low Fly (Cable)", sets: [1, 2, 3] },
      { name: "Bench Press (Barbell)", sets: [1, 2, 3] },
      { name: "Seated Overhead Press (Dumbbell)", sets: [1, 2, 3] },
      { name: "Chest Dip", sets: [] },
      { name: "Triceps Pushdown", sets: [] },
      { name: "Decline Crunch", sets: [] },
    ],
  },
  {
    name: "Pull A",
    exercises: [
      { name: "Pullover (Cable)", sets: [] },
      { name: "Pull Up (Band)", sets: [] },
      { name: "T-Bar Row", sets: [] },
      { name: "Lat Pulldown (Cable)", sets: [] },
      { name: "Single Arm Pulldown (Cable)", sets: [] },
      { name: "Reverse Fly (Machine)", sets: [] },
      { name: "Incline Bicep Curl (Dumbbell)", sets: [] },
      { name: "Preacher Curl (Barbell)", sets: [] },
    ],
  },
];

const Workout: FunctionComponent = () => {
  return (
    <div className="relative px-4 flex flex-col h-full overflow-y-scroll">
      <h1 className="mt-6 text-3xl font-semibold text-neutral-900">Workout</h1>
      <div>
        <h2 className="text-neutral-700">TEMPLATES</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {TEMPLATES.map((template) => (
            <li className="basis-full rounded-md border px-2 py-4 border-neutral-100">
              <h3 className="text-lg font-semibold border-neutral-200">
                {template.name}
              </h3>
              <ol className="flex flex-col -space-y-1.5">
                {template.exercises.map(({ name, sets }, i) => (
                  <li className="text-neutral-600 flex gap-2">
                    <p className="w-3 text-center text-emerald-400 font-semibold">
                      {i + 1}
                    </p>
                    <p>
                      {sets.length} x {name}
                    </p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
      {/* <button className="fixed bottom-20 right-6 rounded-full w-16 h-16 bg-emerald-400 drop-shadow-xl flex items-center justify-center text-white">
        <AddIcon className="fill-current w-10 h-10" />
      </button> */}
    </div>
  );
};

export default Workout;
