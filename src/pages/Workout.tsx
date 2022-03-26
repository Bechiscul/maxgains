import { FunctionComponent } from "preact";

const Workout: FunctionComponent = () => {
  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <h1 className="mx-4 mt-6 text-3xl font-semibold text-neutral-900">
        Workout
      </h1>
    </div>
  );
};

export default Workout;
