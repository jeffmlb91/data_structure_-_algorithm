// Big 0 determin which code runs more efficiently 
//Time complexitely is mesure through a number of operations - The number of operations should be the same on a slow computer as well as a fast one that
//space Complexity is the amount of memory that something uses. 
//We look more on time complexity, but it is also recommended to learn space complexity and

//There a re 3 greek letter Omega Theta and Omecron (0). The one that we see more often is big 0
//Best case is Omega  Thetha is average and Big 0 is worst case. example find a number in an array [1, 2, 3, 4, 5, 6, 7]
//In the above example, we need to find [1] so this is our best case - [4] will be our average case (thetha) and [7] is our worst case (0)

// Big O notation 
// 0(n) the easiest
//This is a 0(n) operation --> Number of operation will be proportional to the number of n
function logItems(n) {
    for(let i = 0; i < n; i ++) {
        console.log(i);
    }
}
logItems(10);
