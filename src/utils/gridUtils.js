// size parameter takes number data type
// returns the Array, 2D array representing the grid

export function createGrid(size) {
    const newGrid = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push({isActive: false})
        }

        newGrid.push(row);
    }

    return newGrid;
}