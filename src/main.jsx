import "@fontsource/poppins";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./components/router";

import "./index.css";
import "./fonts.css";

const root = createRoot(document.getElementById("root"));

root.render(<Router />);
