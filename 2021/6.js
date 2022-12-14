let input = [
    1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 3, 1, 1, 3, 5, 1, 5, 3, 2, 1, 1, 2, 3, 1, 1,
    5, 3, 1, 5, 1, 1, 2, 1, 2, 1, 1, 3, 1, 5, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 4,
    5, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 5, 1, 2, 4, 1,
    1, 4, 1, 2, 1, 1, 1, 2, 1, 5, 1, 1, 1, 3, 4, 1, 1, 1, 3, 2, 1, 1, 1, 4, 1,
    1, 1, 5, 1, 1, 4, 1, 1, 2, 1, 4, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1,
    2, 1, 4, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 5, 1, 1, 1, 2, 2, 1, 1, 3, 5, 1, 1, 1,
    1, 3, 1, 3, 3, 1, 1, 1, 1, 3, 5, 2, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2,
    1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 5, 1, 4, 3, 3, 1, 3, 4,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 5, 2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1,
    1, 1, 2, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 2, 5, 1, 1, 4, 1, 3, 1, 1,
];

let test = [3, 4, 3, 1, 2];

let fishCount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

input.forEach(fish => {
    fishCount[fish]++;
});

for (let day = 0; day < 256; day++) {
    let zero = fishCount[0];

    fishCount[0] = fishCount[1];
    fishCount[1] = fishCount[2];
    fishCount[2] = fishCount[3];
    fishCount[3] = fishCount[4];
    fishCount[4] = fishCount[5];
    fishCount[5] = fishCount[6];
    fishCount[6] = fishCount[7];
    fishCount[7] = fishCount[8];
    fishCount[8] = 0;
    
    fishCount[8] += zero;
    fishCount[6] += zero;
}

let sum = 0;

fishCount.forEach(value => {
    sum += value;
});

console.log(sum);