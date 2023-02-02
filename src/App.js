import PageRouter from "./router/PageRouter";
import { useSelector } from "react-redux";
import "./style/AppStyle.css";


function App() {
  const status = useSelector((store) => store.darkmod);
  const root = document.querySelector("body");
  root.setAttribute("style", `background-color:${status ? "white" : "black"};color:${status ? "black" : "white"}`);

  return (
    <>
      <PageRouter />
    </>
  );
}

export default App;
