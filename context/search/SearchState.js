import React, { useReducer } from "react";

import SearchContext from "./searchContext";
import SearchReducer from "./searchReducer";

const SearchState = (props) => {
  const initialState = {
    info: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  // Search
  const search = async (currentPage, state) => {
    setLoading();
    const url = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&q=&rows=20&start=${currentPage}&refine.statedisplaynameoflastcontact=${state}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "SEARCH",
      payload: data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SearchContext.Provider
      value={{
        info: state.info,
        loading: state.loading,
        search,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
