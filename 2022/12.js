let input = [
    "abccccccccaaaaccccaaacaccccaaaaaacccccccccccaaaccccccccccaaaaaaacccccccccccccccccccccccccccccacaaaccccccccccccccccccccccccccccccccccccccccaaaaa",
    "abccccccccaaaaccaaaaaaaacccaaaaaacccccccccccaaaacccccccccaaaaaaaaaacccccccccccccccaaccccccccaaaaaccaaaccaacccccccccccccccccccccccccccccccaaaaaa",
    "abcccccccccaacccaaaaaaaaccccaaaaacccccccccccaaaacccccccaaaaaaaaaaaaaccccccccccaaaaaaccccccccaaaaaaaaaaaaaaccccccccccccccccaaaccccccccccccaaaaaa",
    "abcccccccccccccccaaaaaccccccaacaaccccaacccccaaacccccccaaaaaaaaaaaaaaccccccccccaaaaaaacccccccccaaaaacaaaaaaccccccccccccccccaaccccccccccccccccaaa",
    "abccccccccccccccccaaaaaccccccccccaaccaacccccccccccccccaaaaacaaaacacacccccaacccaaaaaaaacccccccaaaaacaaaaaaaccccccccccccccccaaacccccccccccccccaaa",
    "abcccccccccccccccaaaaaaccccccccccaaaaaaccccccccccccccccaaaaaaaacaaaaacaaaaaccccaaaaaaacccccccaacaacaaaaaaaaccccccccaaaaccaakcccccccccccccccccaa",
    "abcccccccccccccccaaaccacccccccccccaaaaaaacccccccaaaccccccaaaaaacaaaaaccaaaaaccaaaaaaccccccccccccaacaaaaaaaacccccccccaaaakkkklllcccccccccccccccc",
    "abcccccaaaccccccccccccccccccccccccaaaaaaacccccccaaacacccaaaaaaaaaaaaacaaaaaaccaaaaaacccccccccccccccccaaaccccccccccccaaakkkkkllllcccccccaacccccc",
    "abccccaaaacccccccccccccccccccccccaaaaaacccccccaccaaaaaccaaaaaaaaaaaaacaaaaccccccccaaccccccccccccccccccaaccccccccccccckkkkkkpllllccccaaaaaaccccc",
    "abccccaaaacccccccccccccccccaaacccaaaaaacccccccaaaaaaaacccaaaaacaaaaaacccaaaccccccccccccccccccccccccccccccccccccccccckkkkpppppplllcccaaaaacccccc",
    "abcccccaaaccccccccccccccccaaaacccccccaaccccccccaaaaacccccaaaccccaaacccccccccccccccccccccccccaaccccccccccccccccccjjjkkkkpppppppplllcccaaaaaacccc",
    "abccccccccccccccccccccccccaaaaccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccccaaaaaccccccccccccjjjjjjkkkrppppuppplllccccaaaaacccc",
    "abccccccccccccccaaaccccccccaaaccccccccccccccccccaacaaccccccccccccccccccccccaaaccccccccaacccaaaaaccccccccccccjjjjjjjjrrrpuuuuuppplllcccccaaacccc",
    "abcccccaaccaacccaaacacccccccccccccccccccccccccacaaaaccccccccccccccccccccccaaaaaaccccaaaacccaaaaaaccaccccccccjjjrrrrrrrrruuuuuppplllmcccddcccccc",
    "abcccccaaaaaacaaaaaaaaccccccccccccccccccccccccaacaaaccccccccccccccccccccccaaaaaaccccaaaaaacccaaaaccaaacaaacjjjrrrrrrrrruuuxuuupqqlmmmmddddccccc",
    "abcccccaaaaaccaaaaaaaaccccccccccccccccccccccccaaaaaccccaacccccccccccccccccaaaaaacccccaaaacccaacccccaaaaaaacjjjrrrrtuuuuuuxxyuvqqqqmmmmmddddcccc",
    "abaacccaaaaaaccaaaaaccccccccccccccccccaaaaccccaaaaaaccaaaccccccccccccccccccaaaaaccccaaaaaccccccccccaaaaaaccjjjrrrtttuuuuuxxyvvvqqqqqmmmmdddcccc",
    "abaaccaaaaaaaaccaaaaaccccccccccccccccaaaaaaaaaaaaaaaacaaacaaaccccccccccccccaacaacaacaacaaccccccccaaaaaaaaccijjqqrtttxxxxxxyyvvvvvqqqqmmmmdddccc",
    "abaaccaaaaaaaacaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaacaaaccccccccccaaccaaaaaaaaaciiiqqqttxxxxxxxyyvvvvvvvqqqmmmdddccc",
    "abaaaccccaaccccaaaccacccccccccccccccccaaaaaaccccaacaaaaaaaaaaccaaaccccccccccaaaaaaaccccccccccaaaaaaaaaaaaaaiiiqqqtttxxxxxxyyyyyyvvvqqqmmmdddccc",
    "SbaaaccccaacccccccccccccccccccccccccaaaaaaaaccccaacccaaaaaaccaaaaaaccccccccccaaaaaacccccccccccaaaaacaaacaaaaiiiqqqttxxxxEzzyyyyyvvvqqqmmmdddccc",
    "abaaaccccccccccccccccccccccccccccccaaaaaaaaaaccccccccaaaaaaccaaaaaaccccccccccaaaaaaaaccccccccaaaaaacaaaccaaaiiiqqqtttxxxyyyyyyvvvvqqqmmmdddcccc",
    "abaccccccaacccccccccccccccccccccccccaaaaaaaaaaaacccccaaaaaaacaaaaaacccccccccaaaaaaaaacccccccaaaaaaaacaaaaaaaiiiqqqtttxxyyyyyyvvvvqqqqnnmeddcccc",
    "abccccccaaaaccccccccccccaaaccccccccccccaaaaaaaaaaacccaaacaaacaaaaacccccccccaaaaaaaaaacccccccaaaaaaaaccaaaaaaaiiiqqtttxxyyyyyywvrrrrnnnneeeccccc",
    "abccccccaaaacccccaacccccaaaacccccccccccaaaccaaaaaacccacccccccaaaaacccccccccaaacaaacccccccccccccaacccccccaaaaaiiqqqttxxwywwyyywwrrrnnnneeeeccccc",
    "abccccccaaaaccaacaaaccccaaaaccccccaacccaacccaaaaaccccccccccccccccccccccccccccccaaacccccccccccccaaccccccaaaaaaiiqqqttwwwwwwwwywwrrrnnneeeecccccc",
    "abccccccccccccaaaaacccccaaaccccacaaacccccccccaaaaacccccccccccccccccccccccccccccaaacccccccccccccccccccccaaaaaaiiqqpsswwwwsswwwwwrrnnneeeeccccccc",
    "abcccccccccccccaaaaaacccccccccaaaaacaacccccccaacaacccccaaccccccccccccccccccccccccccccccccccccccccccccccaccaahhhpppssssssssswwwwrrnnneeeaccccccc",
    "abcccccccccccaaaaaaaacccccccccaaaaaaaacccccaaccccccaaacaaccccccccccccccccccccccccccccccccccccaaaccaccccccccchhhpppsssssssssswwrrrnnneeeaaaacccc",
    "abcccccccccccaaaaacaacccccccccccaaaaaccaaaaaaccccccaaaaaaccccccccccccccccccccccccccccaaccaaccaaaaaacccccccccchhpppppsspppossrrrrrnnneeeaaaacccc",
    "abccccccccccccacaaaccccccccccccaaaaacccaaaaaaaacccccaaaaaaaccaaaccccccccaaaacccccccccaaaaaacccaaaaacccccccccchhhpppppppppoosrrrroonffeaaaaacccc",
    "abccccccccccccccaaaccccccccccccaacaaaccaaaaaaaaccccaaaaaaaaacaaaccccccccaaaacccccccccaaaaaccaaaaaaacccccccccchhhhpppppppoooooooooonfffaaaaccccc",
    "abcccccccccccccccccccccccaaaccccccaaccccaaaaaaaccccaaaaaaaaaaaaaaaccccccaaaacccccccccaaaaaacaaaaaaaacccccaacchhhhhhhhgggggoooooooofffaaaaaacccc",
    "abcccccccccccccccccccccccaaaaacccaacccccaaaaaccccccaaaaaacaaaaaaaaccccccaaacccccccccaaaaaaaaaaaaaaaaccccaaacccchhhhhgggggggooooooffffaaaaaacccc",
    "abccaaacccccccccccccccccaaaaaaccaaaccccaaaaaacccccccccaaacccaaaaacccccccccccccccccccaaaaaaaaccaaacacccccaaacaaachhhggggggggggfffffffcaacccccccc",
    "abcaaaaccccccccccaacccccaaaaaaccaaacaaaccccaaccccccccccccccaaaaacccccccccccccccccccccccaacccccaaaccccaaaaaaaaaacccccccccaagggffffffcccccccccccc",
    "abcaaaaccccccccccaaccccccaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaccccccccccccccccccccccaaccccccccccccaaaaaaaaaccccccccccaaacgfffffcccccccccccaa",
    "abccaaacccccccaaaaaaaacccaaaaaaaaaaaaaaccccccccaaaaaccaaaaaaaaaaaaaacaacccccccccaaaccacccccccccccccccccaaaaacccccccccccaaaaccccccccccccccccccaa",
    "abccccccccccccaaaaaaaacccccccccaaaaaaccccccccccaaaaaccaaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaacccccccccccaacccccccccccccccacacaa",
    "abccccccccccccccaaaacccccccccccaaaaaacccccccccaaaaaacccaaaaaaaaaaaaacaaaaaacccccaaaaaacccccccccccccccccaaaaaaaccccccccccaacccccccccccccccaaaaaa",
    "abcccccccccccccaaaaaaccccccccccaaaaaaaccccccccaaaaaaccccccaaaaaacccaaaaaaaaccccaaaaaaaaccccccccccccccccaaacaaacccccccccccccccccccccccccccaaaaaa",
];

let start = { x: 0, y: 0 };
let end = { x: 0, y: 0 };

let heightArr = [];
let distArr = [];

input.forEach((inputRow) => {
    let heightRow = [];
    let distRow = [];

    for (let i = 0; i < inputRow.length; i++) {
        if (inputRow[i] == "S") {
            heightRow.push(0);
            start = { x: i, y: 20 };
        } else if (inputRow[i] == "E") {
            heightRow.push(25);
            end = { x: i, y: 20 };
        } else {
            heightRow.push(inputRow.charCodeAt(i) - 97);
        }

        distRow.push(999);
    }

    heightArr.push(heightRow);
    distArr.push(distRow);
});

let button = document.querySelector("button");
button.addEventListener("click", function (event) {
    if (!event.target) return;

    floodFill(end, 25, 0);
});

async function floodFill(origin, prevHeight, prevDist) {
    if (
        origin.x < 0 ||
        origin.x >= distArr[0].length ||
        origin.y < 0 ||
        origin.y >= distArr.length
    ) {
        return;
    }

    let height = heightArr[origin.y][origin.x];

    if (height < prevHeight - 1) {
        return;
    }

    let dist = prevDist + 1;

    if (prevDist + 1 < distArr[origin.y][origin.x]) {
        distArr[origin.y][origin.x] = dist;
    } else {
        return;
    }

    console.log(origin, height, dist);
    await draw(origin, dist);

    let newOri;
    newOri = { x: origin.x + 1, y: origin.y + 0 };
    floodFill(newOri, height, dist);
    newOri = { x: origin.x + 0, y: origin.y + 1 };
    floodFill(newOri, height, dist);
    newOri = { x: origin.x - 1, y: origin.y + 0 };
    floodFill(newOri, height, dist);
    newOri = { x: origin.x + 0, y: origin.y - 1 };
    floodFill(newOri, height, dist);
}

async function draw(origin, dist) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = `rgb(${dist}, 0, 0)`;
    ctx.fillRect(origin.x, origin.y, 1, 1);
}
