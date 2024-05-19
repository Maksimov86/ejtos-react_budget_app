import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'

const Currency = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    

    return (
        <div className='currency-container'> {
            <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$" id='Dollar'>Currency $ Dollar</option>
                <option value="£" id='Pound'>Currency £ Pound</option>
                <option value="€" id='Euro'>Currency € Euro</option>
                <option value="₹" id='Ruppee'>Currency ₹ Ruppee</option>
            </select>	
        }	
        </div>
    );
};

export default Currency;