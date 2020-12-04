import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USER,
  GET_REPOS,
  GET_USER,
  CLEAR_USER,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //   search user
  const searchUsers = async (text) => {
    setLoading();

    // using async await
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );

    dispatch({
      type: SEARCH_USER,
      payload: res.data.items,
    });
  };

  // get user
  const getUser = async (username) => {
    setLoading();

    // using async await
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_CLIENT}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // get repos

  // clear user
  const clearUsers = () => dispatch({ type: CLEAR_USER });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
