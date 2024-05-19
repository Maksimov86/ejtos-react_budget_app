import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { greenPlusSign } from '../src/react-icons';
import { redMinusSign } from '../src/react-icons';
import { blackСrossSign } from '../src/react-icons';

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
            <td><greenPlusSign size='2.2em' onClick={handleIncrease}>+</greenPlusSign></td>
            <td><redMinusSign size='2.2em' color="red" onClick={handleDecrease}>-</redMinusSign></td>
            <td><blackСrossSign size='2.2em' onClick={handleDelete}></blackСrossSign></td>
        </tr>
    );
};

export default ExpenseItem;
