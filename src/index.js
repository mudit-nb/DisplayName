import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Displayname from "./DisplayName";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Displayname />
  </StrictMode>
);
