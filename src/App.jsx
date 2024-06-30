import React from 'react';

import Score from "./components/Score";
import Square from "./components/Square";
import RestartButton from "./components/RestartButton";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function App(){
    const [xPoints, setXPoints] = useState(0);
    const [oPoints, setOPoints] = useState(0);
    const [drawPoints, setDrawPoints] = useState(0);

    const [winner, setWinner] = useState(false);
    const [xIsNext, setXIsNext] = useState(true);

    const [squares, setSquares] = useState(Array(9).fill("-"));

    useEffect(() => {
        const winner = calculateWinner(squares);
        if (winner === "o") {
            setOPoints(oPoints + 1);
            setWinner(true);

            toast('Wins!',
                {
                    icon: '⭕',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } else if (winner === "x") {
            setXPoints(xPoints + 1);
            setWinner(true);

            toast('Wins!',
                {
                    icon: '❌',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } else if (winner === null && squares.filter(square => square === '-').length === 0) {
            setDrawPoints(drawPoints + 1);
            setWinner(true);

            toast('Draw!',
                {
                    icon: '❓',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }, [squares])

    function calculateWinner(squares) {
        //Lines define todas las posibles combinaciones ganadoras para 'X' o 'O'.
        //En el caso que se presente una combinación donde se repite un mismo símbolo ('X' o 'O'), se devuelve el valor.
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const handleClick = (index) => {
        if (squares[index] != '-' || winner) {
            return;
        }

        const nextSquare = squares.slice();

        if (xIsNext) {
            nextSquare[index] = "x";
        } else {
            nextSquare[index] = "o";
        }

        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }

    const handleRestart = () => {
        setWinner(false);
        setXIsNext(true);
        setSquares(Array(9).fill("-"));

        toast('Game restarted',
            {
                icon: '🎯',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    return (
        <div className="game">
            <div className="game-header">
                <Score label="player x" value={xPoints} />
                <Score label="dray" value={drawPoints} />
                <Score label="player o" value={oPoints} />
            </div>

            <div className="game-board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>

            <div className="game-footer">
                <RestartButton onRestartClick={handleRestart} />
            </div>
        </div>
    )
}