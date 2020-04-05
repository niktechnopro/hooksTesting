import React, { useState, userReducer, useContext } from 'react';

const HooksForm = () => {
    const [valueChange, setValueChange] = useState("");
    const [valueSubmit, setValueSubmit] = useState("");

    const handleUseStateChange = (event) => {
        setValueChange(event.target.value);
    }

    const handleUseStateSubmit = (event) => {
        console.log("event", event.target)
        event.preventDefault();
        setValueSubmit(event.target.value);
    }

    return(
        <div>
            <form onSubmit={handleUseStateSubmit}>
                <p>Our Hooks Form goes here: </p>
                <input id="useState" type="text" onChange={handleUseStateChange} />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div>
                <h2>React use state: </h2>
                <p> Change of value: {valueChange}</p>
                <p> Change of Submit: {valueSubmit}</p>
            </div>
        </div>
    )
}

export default HooksForm;