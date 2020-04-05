import React, { Component, useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';

import * as Reducer from './store/hooks_state/hooks_reducer';
import * as Actions from './store/actions/actions';

import * as formReducer from './store/hooks_state/input_form_reducer';

//main app 
const App = () => {

    const [stateGlobal, setStateGlobal] = useState(0);

    const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
    const [formState, dispatchForm] = useReducer(formReducer.FormReducer, formReducer.initialState);

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

    const handleUserContextInputChange = (event) => {
      dispatchForm(Actions.user_input_change(event.target.value));

    }

    const handleUserContextFormSubmit = (event) => {
        event.preventDefault(); //to prevent form from reloading the page
        event.persist(); //needed for form submit with context
        dispatchForm(Actions.user_input_submit(event.target.useStateReducerInput.value));
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
            dispatchContextFalse: handleContextDisptachFalse,

            formInput: formState.user_text_change,
            formSubmit: formState.user_form_submit,
            handleUserReducerChange: handleUserContextInputChange,
            handleUserReducerSubmit: handleUserContextFormSubmit
          }}
        >
          <Routes />
        </Context.Provider>
      </div>
    )
}


export default App;
