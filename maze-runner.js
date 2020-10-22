function mazeRunner(maze, directions) {
    // find start
    let row;
    let col;
    outer: for (row = 0; row < maze.length; row++) {
        for (col = 0; col < maze.length; col++) {
            if (maze[i][j] === 2) {
                row = i;
                col = j;
                break outer;
            }
        }
    }
    // navigate
    for (const direction of directions) {
        if (direction === "N") {
            row--;
        } else if (direction === "S") {
            row++;
        } else if (direction === "E") {
            col++;
        } else if (direction === "W") {
            col--;
        } else if (row < 0 || row >= maze.length || col < 0 || col >= maze.length) {
            return "Dead";
        } else if (maze[row][col] === 3) {
            return "Finish";
        } else if (maze[row][col] === 1) {
            return "Dead";
        }
    }
    return "Lost";
}
