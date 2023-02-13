import PageRouter from "./router/PageRouter";
import "./style/AppStyle.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { setCurrentUser } from "./redux-store/slice/checkUserAuth";
import { useDispatch, useSelector } from "react-redux";
// ----------------------------------------------------------------------------------------------------------
function App() {
  const status = useSelector((store) => store.darkmod);
  const root = document.querySelector("body");

  //use
  const auth = getAuth();
  const dispatch = useDispatch();

  //dark mode
  root.setAttribute(
    "style",
    `background-color:${status ? "white" : "black"};color:${
      status ? "black" : "white"
    }`
  );

  //When rendering Page

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
    });
  });

  return (
    <>
      <PageRouter />
    </>
  );
}

export default App;
