import { MainLayout } from "./components/"
import { Provider } from "react-redux"
import { store } from "./state";
import RoutesLayout from "./routes/Routes"
import { useEffect, useState } from "react";

function App() {

  //const userAuthStore = useContext(userauthStore);
  const [userId, setUserId] = useState("");
  let sessionObj = JSON.parse(sessionStorage.getItem("sessionObj")!) 
  let IsLoggedIn = sessionStorage.getItem("isLoggedIn")

  useEffect(() => {
    if (IsLoggedIn && sessionObj && sessionObj.id !== undefined && sessionObj.id !== null) {
      setUserId(sessionObj.id);
    } else {
      setUserId("");
    }
  }, [sessionObj]);

  const setLogin = (resp: any) => {
    if (resp.Client !== null) {
      setUserId(sessionObj.id);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("sessionObj", JSON.stringify(resp));
    } else {
      setUserId("");
      sessionStorage.clear();
    }
  };

  const signout = () => {
    setUserId("");
    sessionStorage.clear();
    
  };

  return (
    <Provider store={store} >
      <MainLayout>
        <RoutesLayout />
      </MainLayout>
    </Provider>
  )
}

export default App;
