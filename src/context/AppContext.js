// context/AppContext.js
import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const updatedExpenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    return {
                        ...expense,
                        cost: expense.cost + action.payload.cost,
                    };
                }
                return expense;
            });

            return {
                ...state,
                expenses: updatedExpenses,
            };
        case 'RED_EXPENSE':
            const reducedExpenses = state.expenses.map((expense) => {
                if (expense.name === action.payload.name && expense.cost >= action.payload.cost) {
                    return {
                        ...expense,
                        cost: expense.cost - action.payload.cost,
                    };
                }
                return expense;
            });

            return {
                ...state,
                expenses: reducedExpenses,
            };
        case 'DELETE_EXPENSE':
            const zeroedExpenses = state.expenses.map((expense) => {
                if (expense.id === action.payload) {
                    return {
                        ...expense,
                        cost: 0,
                    };
                }
                return expense;
            });

            return {
                ...state,
                expenses: zeroedExpenses,
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const remaining = state.budget - state.expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <AppContext.Provider value={{ ...state, remaining, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
