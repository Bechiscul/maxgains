import { ComponentType, FunctionComponent, JSX } from "preact";
import { Link } from "../Router";

import Container from "../ui/Container";
import Drawer from "../ui/Drawer";

import { Component as AddIcon } from "../assets/icons/add.svg";
import { Component as FitnessCenterIcon } from "../assets/icons/fitness_center.svg";
import { Component as HistoryIcon } from "../assets/icons/history.svg";
import { Component as MenuIcon } from "../assets/icons/menu.svg";
import { useState } from "preact/hooks";
import Modal from "../ui/Modal";

type Route = {
  name: string;
  to?: string;
  action?: () => void;
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
  const [isOpen, setIsOpen] = useState(false);

  const routes = ROUTES.concat([
    {
      name: "Menu",
      action: () => setIsOpen(true),
      icon: MenuIcon,
    },
  ]);

  return (
    <nav className="w-full h-16 flex justify-center items-center bg-emerald-500">
      <Container>
        <ul className="font-semibold w-full flex justify-evenly">
          {routes.map((route) => (
            <li>
              <Link
                to={route.to}
                className="flex flex-col items-center text-white"
                onClick={route.action}
              >
                {route.icon ? <route.icon className="fill-current" /> : null}
                <p className="text-xs font-bold">{route.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Hello World!</h1>
      </Modal>
    </nav>
  );
};

export default AppBar;
