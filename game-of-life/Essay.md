In Conway's Game of Life, each cell is either dead or alive, also referred to as state being on or off. Every cell will interact with its 8 neighbors. 
There are 4 rules that are in place for this:
1. A live cell with less than two live neighbours dies.
2. A live cell with two or three neighbours lives on to the next generation.
3. A live cell with more than tree neighbours dies.
4. A dead cell with exactly three neighbours is reborn and becomes a live cell.
When the game starts these rules are applied and will update the state of the grid for the next generation. We evaluate the live cells and their neighbors to know which state they will be in the next generation.

The initial step is to set up the grid, which in my case this was just set up in react using divs and mapping over the cells. Once the grid is set up and styled we can move onto the logic of the game. In order to randomize the cells that are initialized, I looped and randomized the cells being that were going to start off in the "live" state.

When we start analyzing the individual cells to look at their neighbors, we want to get the x, y coordinates to help us locate the live and dead cells in relation to each cell. As per the rules, if were looking at cell x, we want to analyze the current gen of the eight surrounding cells and implement the correct logic to know whether the neighboring cells will "die" or "reproduce".  I used a 2d array and a cell list this.state.cells to keep the position of the cells. Once the board state gets updated, the makeCells function will be called to generate the cell list from the board state. The board state will be run every iteration (set to how long the interval time is- in our case initialized at 75 ms).
We can change the interval, randomize the board with cells, and start and stop the actual game. 



