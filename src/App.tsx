import { FunctionalComponent } from "preact";

import { Link, Router } from "./Router";

import "preact/devtools";

import Container from "./ui/Container";
import AppBar from "./components/AppBar";

const App: FunctionalComponent = () => (
  <>
    <Router>
      <div className="">
        <Container>
          <p>test</p>
        </Container>
      </div>
      <div className="absolute w-screen bottom-0">
        <AppBar />
      </div>
    </Router>
  </>
);

export default App;
