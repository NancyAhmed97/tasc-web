import "./App.css";
import Routes from "./Routes";
// import { changeLocal } from "./Redux/Localization";
import { useSelector } from "react-redux";
function App() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  document
    .querySelector("html")
    .setAttribute("dir", currentLocal.language === "English" ? "ltr" : "rtl");
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
