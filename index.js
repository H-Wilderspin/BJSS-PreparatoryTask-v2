
let N = 295000

function solution(N) {
    let value = parseInt(N)
    let surplus = 0
    let dutyBreakdown = {}

    if (isNaN(value)) { return 0 }
    if (value < taxBand[0].min) { return 0 }

    for (let i = taxBand.length - 1; i >= 0; i--) {

        let taxableSum = value - (taxBand[i].min + surplus)

        if (taxableSum > 0) {

            surplus = surplus + taxableSum
            const tax = (taxableSum / 100) * taxBand[i].rate
            dutyBreakdown[taxBand[i].name] = tax

        } else continue
    }

    const dutyTotal = Object.values(dutyBreakdown).reduce((a, b) => a + b)

    return dutyTotal
}

console.log(`
    index.main:

        N: ${N}
        Return: ${solution(N)}
        House value: ${N.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
        Stamp duty: ${solution(N).toLocaleString("en-GB", { style: "currency", currency: "GBP" })}

`)

