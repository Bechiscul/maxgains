import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import Badge from "../ui/Badge";
import Container from "../ui/Container";

import { Component as PhotoCameraIcon } from "../assets/icons/photo_camera.svg";

type Exercise = {
  name: string;
  description: string;
  image?: string;
  compound?: boolean;
  primary?: string[];
  secondary?: string[];
};

const EXERCISES: Exercise[] = [
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: true,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: true,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: true,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
  {
    name: "Bench Press",
    description: "Good exercise",
    compound: false,
    primary: ["Chest", "Shoulders", "Triceps"],
  },
];

const Exercises: FunctionComponent = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    setExercises(EXERCISES);
  }, []);

  return (
    <>
      <div className="flex flex-col h-full overflow-y-scroll">
        <h1 className="mx-4 mt-16 text-3xl font-semibold">Exercises</h1>
        <ul className="px-4 py-2 flex flex-col gap-1">
          {exercises.map((exercise) => (
            <ExerciseItem exercise={exercise} />
          ))}
        </ul>
      </div>
    </>
  );
};

interface ExerciseProps {
  exercise: Exercise;
}

const ExerciseItem: FunctionComponent<ExerciseProps> = ({ exercise }) => (
  <li className="h-20 flex gap-2 items-center border-b border-neutral-100 last:border-0">
    <div className="flex w-16 h-16 rounded-full bg-neutral-100 items-center justify-center">
      <PhotoCameraIcon />
    </div>
    <div className="h-16 relative flex flex-col -space-y-1 justify-center">
      {exercise.compound ? (
        <p className="text-xs absolute -top-0.5 text-emerald-400">Compound</p>
      ) : null}
      <h1 className="font-semibold text-xl">{exercise.name}</h1>
      <ul className="flex space-x-1">
        {exercise.primary?.map((muscle) => (
          <p className="text-sm text-neutral-500">{muscle},</p>
          // <p className="mt-0.5 text-sm text-neutral-500 bg-neutral-100 rounded px-1">
          //   {muscle}
          // </p>
        ))}
      </ul>
    </div>
  </li>
);

export default Exercises;
