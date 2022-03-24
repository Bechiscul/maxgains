import { FunctionComponent } from "preact";
import { Link } from "../Router";

import Container from "../ui/Container";

const ROUTES = [
  {
    name: "History",
    path: "/history",
  },
  {
    name: "Workout",
    path: "/workout",
  },
  {
    name: "Exercises",
    path: "/exercises",
  },
];

const AppBar: FunctionComponent = () => {
  return (
    <nav className="w-full h-16 flex items-center bg-emerald-500">
      <Container>
        <ul className="w-full flex justify-evenly">
          {ROUTES.map((route) => (
            <li>
              <Link path={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default AppBar;
