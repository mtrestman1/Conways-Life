import React from 'react';
import './Game.css';
import Cell from './Cell';


const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;


class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = this.makeEmptyBoard();

        this.state = {
            cells: [],
            isRunning: false,
        }
    }

    makeEmptyBoard = () => {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }

        return board;
    }

    makeCells = () => {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    handleClick = (event) => {

        this.setState({ cells: this.makeCells() });
    }

    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= .5);
            }
        }

        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells, interval, isRunning } = this.state;
        return (
            <div>
                <h3>(Max's) Conway's Game of Life</h3>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                    onClick={this.handleClick}
                    >

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`}/>
                    ))}
                </div>

                <div className="controls">
                   
                    {isRunning ?
                        <button className="button" onClick={this.stopGame}>Stop</button> :
                        <button className="button" onClick={this.runGame}>Run</button>
                    }
                    <button className="button" onClick={this.handleRandom}>Random</button>
                    <button className="button" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        );
    }
}


export default Game;