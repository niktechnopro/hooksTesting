import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as Actions from '../store/actions/actions';

import Context from '../utils/context';


const HooksContainer1 = () => {
    const context = useContext(Context);

    const [stateValue, setValue] = useState(0);//initial value of state
    const [useEffectValue, setUseEffectValue] = useState(null);



    useEffect(() => {
        setTimeout(() => setUseEffectValue("useEffect worked"), 2000);
    },[])//we can pass value as an argument to an array to make it work, empty array will make it work just once

    useEffect(() => {
        setUseEffectValue("useEffect runs when stateValue changes : "  + stateValue);
    },[stateValue])//in array is a property, that forces useEffect to change

    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    const increment = ()  => {
        setValue(stateValue + 1);
    }

    const decrement = () => {
        setValue(stateValue - 1);
    }

    const handleDispatchTrue = () => {
        // dispatch(Actions.SUCCESS);//one way
        // dispatch({type: "SUCCESS"});//another way
        dispatch(Actions.success());//third way
    }

    const handleDisptachFalse = () => {
        dispatch(Actions.failure());
    }

    return(    
        <div>
            react hooks and the buttons
            <br />
            <p>Value: {stateValue}</p>
            <button onClick={increment}>increment state value</button>
            <button onClick={decrement}>decrement state value</button>
            <br />
            <div>
                <p>{useEffectValue ?
                    useEffectValue
                    :
                    "No Value"
                }</p>
            </div>

            <br />
            <div>
                <p>Changing local state: </p>
                <button onClick={handleDispatchTrue}> Dispatch True </button>
                <button onClick={handleDisptachFalse}> Dispatch False </button>
                <br />
                <p>state props is: {state.stateprop1 ? "true" : "false"}</p>
            </div>

            <br />
            <div>
                <p>Changing Global state: </p>
                <button onClick={context.dispatchContextTrue}> Dispatch True </button>
                <button onClick={context.dispatchContextFalse}> Dispatch False </button>
                <br />
                <p>Global state props is: {context.reducerGlobalState ? "true" : "false"}</p>
            </div>

            <br />
            <div>
                <p>Changing global state: </p>
                <button onClick={context.addGlobalValue}> Add Global Value </button>
                <button onClick={context.decrementGlobalValue}> Decrement Global Value </button>
                <br />
                <p>Global Value is: {context.valueGlobalState}</p>
            </div>

        </div>
    )
}

export default HooksContainer1;