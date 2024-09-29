import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Home from "./pages/Home";

library.add(fas);
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
