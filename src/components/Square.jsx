import { useState } from 'react';

export default function Square({ value, onSquareClick }) {
    return (
        <button className={`square ${(value === '-') ? "light-white" : 
            (value === "x") ? "light-yellow" : "light-blue"}
        }`} onClick={onSquareClick}>
            {value}
        </button>
    );
}