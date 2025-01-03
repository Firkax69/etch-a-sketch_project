import React, {useState} from "react";
import {createGrid} from '../utils/gridUtils'; // Importing the helper function
import './Grid.css';

const Grid = () => {
    const [gridSize, setGridSize] = useState(16); // Default grid size is 16x16
    const [grid, setGrid] = useState(createGrid(gridSize)); // Initial grid creation

    function handleMouseOver(rowIndex, colIndex) {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[rowIndex][colIndex].isActive = true;  // Set cell to active (drawn)
            return newGrid;
        });
    }

    function handleGridSizeChange(event) {
        const newSize = parseInt(event.target.value, 10);
        setGridSize(newSize);
        setGrid(createGrid(newSize)); // Create a new grid when size changes
    }

    function clearGrid() {
        setGrid(createGrid(gridSize)); // Reset the grid to its initial state
    }
    
    return (
        <div>
            <input
                type="number"
                value={gridSize}
                onChange={handleGridSizeChange}
                min='2'
                max='64'
            />
            <button onClick={clearGrid}>Clear</button>
            <div className="grid-container" style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}>
                {grid.map((row, rowIndex) => 
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`grid-cell ${cell.isActive ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Grid;