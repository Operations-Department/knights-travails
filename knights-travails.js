function knightsTravails(current, target) {

    //initialize queue, starting point and path to get there (which for now is also just the staring point)
    const queue = [[current, [current]]];

    //initialize set to keep track of visited spots
    const visited = new Set();
    visited.add(current.toString());

    //define all possible knight moves
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    //while the queue is not empty
    while (queue.length) {

        //dequeue the first element
        const [currentPosition, path] = queue.shift();
        
        //return path if current position matches the target position
        if (currentPosition[0] === target[0] && currentPosition[1] === target[1]) {
            
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            
            path.forEach(element => {console.log(element);});
            return 'done!';
        };

        //generate all possible moves from the current position
        for (const [dx, dy] of knightMoves) {
            const nextPosition = [currentPosition[0] + dx, currentPosition[1] + dy];

            //accept only valid moves (on the board)
            if (nextPosition[0] >= 0 && nextPosition[0] < 8 && nextPosition[1] >= 0 && nextPosition[1] < 8) {
                
                const nextPositionString = nextPosition.toString();

                //add to visited list - stops from revisiting a position
                if (!visited.has(nextPositionString)) {

                    visited.add(nextPositionString);
                    //enqueue the position and the path taken to reach it
                    queue.push([nextPosition, path.concat([nextPosition])]);
                }
            }
        }
    }

    //if no path is found or goes of the board
    return null;
}

console.log(knightsTravails([4,4], [4,3]));