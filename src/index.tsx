import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BaseProvider } from "./base/provider";

ReactDOM.render(
  <BrowserRouter>
    <BaseProvider>
      <App />
    </BaseProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
