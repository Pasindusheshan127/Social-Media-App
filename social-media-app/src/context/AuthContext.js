// context/AuthContext.js
import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "668c01af3791630cb278e785",
    username: "isuru",
    email: "isuru@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: ["668c01853791630cb278e783"],
    followings: ["668c01333791630cb278e77f"],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
