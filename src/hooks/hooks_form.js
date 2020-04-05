import React, { useState, useReducer, useContext } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as formReducer from '../store/hooks_state/input_form_reducer';

import Context from  '../utils/context';

const HooksForm = () => {

    const context = useContext(Context);

    const [valueChange, setValueChange] = useState("");
    const [valueSubmit, setValueSubmit] = useState("");

    const [userState, userDispatch] = useReducer(formReducer.FormReducer, formReducer.initialState);

    const handleUseStateChange = (event) => {
        setValueChange(event.target.value);
    }

    const handleUseStateSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.useStateInput.value);
    }


    // const handleUserReducerChange = (event) => {
    //     userDispatch(ACTIONS.user_input_change(event.target.value));

    // }

    // const handleUserReducerSubmit = (event) => {
    //     event.preventDefault(); //to prevent form from reloading the page
    //     userDispatch(ACTIONS.user_input_submit(event.target.useStateReducerInput.value));
    // }

    return(
        <div>
            <form onSubmit={handleUseStateSubmit}>
                <p>Our Hooks Form goes here: </p>
                <input id="useStateInput" type="text" onChange={handleUseStateChange} />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div>
                <h2>React use local state: </h2>
                <p> Change of value: {valueChange}</p>
                <p> Change of Submit: {valueSubmit}</p>
            </div>


            <h1>Using Form with GlobalReducer</h1>
            <form onSubmit={context.handleUserReducerSubmit}>
                <p>Our Hooks Form goes here: </p>
                <input id="useStateReducerInput" type="text" onChange={context.handleUserReducerChange} />
                <button type="submit">Submit</button>
            </form>
            <br />
            {/* <div>
                <h2>React use local state: </h2>
                <p> Change of value: {userState.user_text_change}</p>
                <p> Change of Submit: {userState.user_form_submit}</p>
            </div> */}
            <div>
                <h2>React use local state: </h2>
                <p> Change of value: {context.formInput}</p>
                <p> Change of Submit: {context.formSubmit}</p>
            </div>
            
        </div>
    )
}

export default HooksForm;