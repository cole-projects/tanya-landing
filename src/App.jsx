import { Route, Routes } from "react-router-dom";
import RedirectHash from "./components/RedirectHash.jsx";
import SiteLayout from "./layouts/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="what-is-tanyatalk"
          element={<RedirectHash hash="what-is-tanyatalk" />}
        />
        <Route
          path="who-is-tanya"
          element={<RedirectHash hash="who-is-tanya" />}
        />
      </Route>
    </Routes>
  );
}
