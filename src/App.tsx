import { FunctionalComponent } from "preact";

import { Link, Route, Router } from "./Router";

import "preact/devtools";

import AppBar from "./components/AppBar";

import ExercisesPage from "./pages/Exercises";
import WorkoutPage from "./pages/Workout";
import HistoryPage from "./pages/History";
import TemplatePage from "./pages/Template";

const App: FunctionalComponent = () => (
  <>
    <Router>
      <div className="h-[calc(100vh-64px)]">
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/template" element={<TemplatePage />} />
      </div>
      <div className="fixed w-screen">
        <AppBar />
      </div>
    </Router>
  </>
);

export default App;
