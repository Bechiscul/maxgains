import { ComponentType, FunctionComponent, JSX } from "preact";
import { Link } from "../Router";

import Container from "../ui/Container";

import { Component as AddIcon } from "../assets/icons/add.svg";
import { Component as FitnessCenterIcon } from "../assets/icons/fitness_center.svg";
import { Component as HistoryIcon } from "../assets/icons/history.svg";

type Route = {
  name: string;
  to: string;
  icon?: ComponentType<JSX.SVGAttributes<SVGElement>>;
};

const ROUTES: Route[] = [
  {
    name: "History",
    to: "/history",
    icon: HistoryIcon,
  },
  {
    name: "Workout",
    to: "/workout",
    icon: AddIcon,
  },
  {
    name: "Exercises",
    to: "/exercises",
    icon: FitnessCenterIcon,
  },
];

const AppBar: FunctionComponent = () => {
  return (
    <nav className="w-full h-16 flex justify-center items-center bg-emerald-500">
      <Container>
        <ul className="font-semibold w-full flex justify-evenly">
          {ROUTES.map((route) => (
            <li>
              <Link
                to={route.to}
                className="flex flex-col items-center text-white"
              >
                {route.icon ? <route.icon className="fill-current" /> : null}
                <p className="text-sm font-semibold">{route.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default AppBar;
