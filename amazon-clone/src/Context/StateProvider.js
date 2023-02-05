// setup data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

// this is the data layer
export const StateContext = createContext();

// build a provider so we can wrap our entire app inside that provider ( like redux )
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* chidren is referring to <App /> in index.js */}
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
