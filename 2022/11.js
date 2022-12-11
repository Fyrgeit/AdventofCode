let input = [
    [
        "Monkey 0:",
        "  Starting items: 54, 61, 97, 63, 74",
        "  Operation: new = old * 7",
        "  Test: divisible by 17",
        "    If true: throw to monkey 5",
        "    If false: throw to monkey 3"
    ],
    [
        "Monkey 1:",
        "  Starting items: 61, 70, 97, 64, 99, 83, 52, 87",
        "  Operation: new = old + 8",
        "  Test: divisible by 2",
        "    If true: throw to monkey 7",
        "    If false: throw to monkey 6"
    ],
    [
        "Monkey 2:",
        "  Starting items: 60, 67, 80, 65",
        "  Operation: new = old * 13",
        "  Test: divisible by 5",
        "    If true: throw to monkey 1",
        "    If false: throw to monkey 6"
    ],
    [
        "Monkey 3:",
        "  Starting items: 61, 70, 76, 69, 82, 56",
        "  Operation: new = old + 7",
        "  Test: divisible by 3",
        "    If true: throw to monkey 5",
        "    If false: throw to monkey 2"
    ],
    [
        "Monkey 4:",
        "  Starting items: 79, 98",
        "  Operation: new = old + 2",
        "  Test: divisible by 7",
        "    If true: throw to monkey 0",
        "    If false: throw to monkey 3"
    ],
    [
        "Monkey 5:",
        "  Starting items: 72, 79, 55",
        "  Operation: new = old + 1",
        "  Test: divisible by 13",
        "    If true: throw to monkey 2",
        "    If false: throw to monkey 1"
    ],
    [
        "Monkey 6:",
        "  Starting items: 63",
        "  Operation: new = old + 4",
        "  Test: divisible by 19",
        "    If true: throw to monkey 7",
        "    If false: throw to monkey 4"
    ],
    [
        "Monkey 7:",
        "  Starting items: 72, 51, 93, 63, 80, 86, 81",
        "  Operation: new = old * old",
        "  Test: divisible by 11",
        "    If true: throw to monkey 0",
        "    If false: throw to monkey 4"
    ]
];

let testInput = [
    [
        "Monkey 0:",
        "  Starting items: 79, 98",
        "  Operation: new = old * 19",
        "  Test: divisible by 23",
        "    If true: throw to monkey 2",
        "    If false: throw to monkey 3"
    ],
    [
        "Monkey 1:",
        "  Starting items: 54, 65, 75, 74",
        "  Operation: new = old + 6",
        "  Test: divisible by 19",
        "    If true: throw to monkey 2",
        "    If false: throw to monkey 0"
    ],
    [
        "Monkey 2:",
        "  Starting items: 79, 60, 97",
        "  Operation: new = old * old",
        "  Test: divisible by 13",
        "    If true: throw to monkey 1",
        "    If false: throw to monkey 3"
    ],
    [
        "Monkey 3:",
        "  Starting items: 74",
        "  Operation: new = old + 3",
        "  Test: divisible by 17",
        "    If true: throw to monkey 0",
        "    If false: throw to monkey 1"
    ]
];

let monkeys = [];

input.forEach(monkeyArray => {
    let monkey = {
        index: parseInt(monkeyArray[0].slice(7, 8)),
        items: monkeyArray[1].slice(18).split(", ").map(i => parseInt(i)),
        operation: {
            operator: monkeyArray[2].slice(23, 24),
            operand: monkeyArray[2].slice(25),
        },
        testDivisor: parseInt(monkeyArray[3].slice(21)),
        trueMonkey: parseInt(monkeyArray[4].slice(29)),
        falseMonkey: parseInt(monkeyArray[5].slice(30)),
    };

    monkeys.push(monkey);
});

let inspects = [0, 0, 0, 0, 0, 0, 0, 0];

for (let t = 1; t <= 10000; t++) {
    monkeys.forEach(monkey => {   
        while (monkey.items.length > 0) {
            let operand;
            if (monkey.operation.operand == "old") {
                operand = monkey.items[0]
            } else {
                operand = parseInt(monkey.operation.operand);
            }

            switch (monkey.operation.operator) {
                case "+":
                    monkey.items[0] += operand;                   
                    break;
                case "*":
                    monkey.items[0] *= operand;
                    break;
                default:
                    console.log("epik fejl")
                    break;
            }

            //monkey.items[0] = Math.floor(monkey.items[0] / 3);
            monkey.items[0] = monkey.items[0] % 9699690;
            
            if (monkey.items[0] % monkey.testDivisor == 0) {
                monkeys[monkey.trueMonkey].items.push(monkey.items.shift());
            } else {
                monkeys[monkey.falseMonkey].items.push(monkey.items.shift());
            }

            inspects[monkey.index]++;
        }
    });
    
    console.log("\nRound " + t)
    for (let i = 0; i < monkeys.length; i++) {        
        console.log("Monkey " + i + ": " + monkeys[i].items);
    }
}

console.log(inspects);