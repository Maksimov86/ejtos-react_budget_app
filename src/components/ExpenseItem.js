import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleIncrease = () => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const handleDecrease = () => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{currency}{cost}</td>
            <td><FaPlusCircle color='green' size='2.2em' onClick={handleIncrease}>+</FaPlusCircle></td>
            <td><FaMinusCircle color='red' size='2.2em' onClick={handleDecrease}>-</FaMinusCircle></td>
            <td><FaCircleXmark size='2.2em' onClick={handleDelete}></FaCircleXmark></td>
        </tr>
    );
};

export default ExpenseItem;
