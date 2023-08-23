import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { toast } from 'react-toastify';


export const signup = (authData, navigate) => async (dispatch) => {
  try {
    console.log(authData);
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    
    navigate("/");
  } catch (error) {
    toast.error(("Enter a name to continue"))
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    toast.error('Invalid email or password');
  }
};