import React, { Component, useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';

import * as Reducer from './store/hooks_state/hooks_reducer';
import * as Actions from './store/actions/actions';

//main app 
const App = () => {

    const [stateGlobal, setStateGlobal] = useState(0);

    const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    const incrementGlobalState = () => {
      setStateGlobal(stateGlobal + 1);
    }

    const decrementGlobalState = () => {
      setStateGlobal(stateGlobal - 1);
    }

    const handleContextDispatchTrue = () => {
        console.log("anything happens here?")
        // dispatch(Actions.SUCCESS);//one way
        // dispatch({type: "SUCCESS"});//another way
        dispatchContextGlobal(Actions.success());//third way
    }

    const handleContextDisptachFalse = () => {
      console.log("anything happens here?")
        dispatchContextGlobal(Actions.failure());
    }

  
    return(
      <div>
        React routes
        <Context.Provider
          value={{
            valueGlobalState: stateGlobal,
            addGlobalValue: () => incrementGlobalState(),
            decrementGlobalValue: () => decrementGlobalState(),

            reducerGlobalState: stateContextGlobal.stateprop2,
            dispatchContextTrue: ()=>handleContextDispatchTrue(),
            dispatchContextFalse: handleContextDisptachFalse
          }}
        >
          <Routes />
        </Context.Provider>
      </div>
    )
}


export default App;
