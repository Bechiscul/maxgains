import { createContext, FunctionalComponent } from "preact";

import { Link, Route, Router } from "./Router";

import "preact/devtools";

import AppBar from "./components/AppBar";

import ExercisesPage from "./pages/Exercises";
import WorkoutPage from "./pages/Workout";
import HistoryPage from "./pages/History";
import TemplatePage from "./pages/Template";

import { initializeApp } from "firebase/app";

const firebaseOptions = {
  apiKey: "AIzaSyCPagRhsbSY4Z6xKtVuob5t5HoOSvIwLoo",
  authDomain: "maxgains-8ed24.firebaseapp.com",
  projectId: "maxgains-8ed24",
  storageBucket: "maxgains-8ed24.appspot.com",
  messagingSenderId: "445065334201",
  appId: "1:445065334201:web:e6ae089396e580e9867a68",
};

initializeApp(firebaseOptions);

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
