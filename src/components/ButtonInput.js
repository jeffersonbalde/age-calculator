
import React from 'react';

function ButtonInput() {
    function handleClick() {
        let giInputSaUser = document.querySelector('#input').value;

        let dateSaUser = new Date(giInputSaUser);
        let yearSaUser = dateSaUser.getFullYear();

        let dateNako = new Date();
        let yearNako = dateNako.getFullYear();

        let totalAge = yearNako - yearSaUser;

        let display = document.getElementById('display')

        const isInvalid = yearSaUser <= 2000 ? display.textContent = `YOUR ${yearSaUser}s BABY YOUR AGE IS ${totalAge}`
                        : yearSaUser <= 2022 ? display.textContent = `YOUR AGE IS ${totalAge}`
                        : display.textContent = "NOT YET BORN"
        
        display.textContent = isInvalid;
    }

    return (
        <div className='container'>
            <input type="date" id="input"></input>
            <button onClick={handleClick}>
                Calculate
            </button>
            <h2 id="display">{}</h2>
        </div>
    )
}

export default ButtonInput