import { createSlice, createAsyncThunk   } from "@reduxjs/toolkit";
import { createContext } from "react";

class UserAuthStore {
  currentModule = "Home";
  isLoggedIn = false;
  LoggedInObj = null;
  //LoggedInObj : ILoginResponse | undefined = undefined;

  HydrateAuthState = () =>{
    if (sessionStorage.getItem("isLoggedIn") === "true")
    {
      this.isLoggedIn = true;
      this.LoggedInObj = JSON.parse(sessionStorage.getItem("sessionObj")!);
    }
  }

  SetLogin = (resp: any) => {
    console.log("resp",resp)
    if (resp.accessToken !== null) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("sessionObj", JSON.stringify(resp));
      this.isLoggedIn = true;
      this.LoggedInObj = resp;
    } else {
      this.isLoggedIn = false;
      this.LoggedInObj = null;
     
    }
  };

  SetLogout = () => {
    sessionStorage.clear();
    this.LoggedInObj = null;
    this.isLoggedIn = false;
  };
}
//export default AuthContext;


export default createContext(new UserAuthStore());



