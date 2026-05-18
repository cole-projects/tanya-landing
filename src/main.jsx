import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import "./index.css";

const MIN_SPLASH_MS = 500;
const splashStart = performance.now();

function mount() {
  const elapsed = performance.now() - splashStart;
  const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);
  setTimeout(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <BrowserRouter>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </StrictMode>
    );
  }, remaining);
}

mount();
