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
//logItems(10); // outputs 0 to 10 in the console

//Big 0 has several way in which we simplify the notation 
//1. Drop constants

function logItemOne (n) {
    for(let i = 0; i < n; i ++) {
        console.log(`first for loop ${i}`);
    }
    for(let j = 0; j < n; j ++) {
        console.log(`second for loop ${j}`)
    }
}
logItemOne(3)
//THe algorithim ran n + n times = 0(2n) | We drop the constant and makes it 0(n)


//2.(0n^2) O of n squared

function logItemNsquare(n) {
    for(let i = 0; i < n; i ++) {
        for(let j = 0; j < n; j ++) {
            console.log(i, j)
        }
    }
}
logItemNsquare(10);
//The number of item we are output in this case is n * n = n^2
//We can add another for loop in the equation

function logItemNsquareTimesThree(n) {
    for(let i = 0; i < n; i ++) {
        for(let j = 0; j < n; j ++) {
            for(let k = 0; k < n; k ++) {
                console.log(i, j, k)
            }
        }
    }
}
logItemNsquareTimesThree(10)
//The number of item we are output in this case is n * n * n = n^3 = n^2 | it can even fo to 3.5.6..... | still o(n^2)
