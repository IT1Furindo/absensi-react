import ReactDOM from "react-dom/client";

// Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";

// Tailwind css
import "./tailwind.css";

// i18n (needs to be bundled)
import App from "./App";

// Router

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
);
