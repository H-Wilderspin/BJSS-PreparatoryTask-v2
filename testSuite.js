// ===== Test Suite =====

describe('When N is random number from 0 - 1.6 Mil', () => {
    beforeEach(() => {
        N = Math.floor(Math.random() * 1600000)
    })

    it(`Output can be rounded up to a positive integer`, () => {

        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is random integer:

        N: ${N}
        Return: ${Math.round(tax)}

        `)
    })
    it(`Output can be rounded up to a positive integer`, () => {

        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is random integer:

        N: ${N}
        Return: ${Math.round(tax)}
        `)
    })
    it(`Output can be rounded up to a positive integer`, () => {

        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is random integer:

        N: ${N}
        Return: ${Math.round(tax)}
        `)
    })
})

describe(`The wrong data type will convert input where possible or return £0`, () => {

    it(`When N is a string`, () => {
        N = "293489"
        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is wrong data type:

        N for this Unit test is a ${typeof N} : ${N}
        Output: ${tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
        `)
    })

    it(`When N is a boolean`, () => {
        N = true
        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is wrong data type:

        N for this Unit test is a ${typeof N} : ${N}
        Output: ${tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
        `)
    })

    it(`When N is null`, () => {
        N = null
        const tax = solution(N)
        expect(Number.isInteger(Math.round(tax))).toBe(true)

        console.log(`
    N is wrong data type:

        N for this Unit test is ${typeof N} : ${N}
        Output: ${tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })}
        `)
    })
})

describe('Output matches a manual entry', () => {
    it(`When House value is £295,000, stamp duty is £4,750`, () => {
        N = 295000
        const tax = solution(N)
        expect(tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })).toBe('£4,750.00')
        console.log(`
    Output matches manual entry: 4750
        N: ${N}
        tax: ${tax}`)
    })
    it(`When House value is £159,900, stamp duty is £698`, () => {
        N = 159900
        const tax = solution(N)
        expect(tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })).toBe('£698.00')
        console.log(`
    Output matches manual entry: 698

        N: ${N}
        tax: ${tax}`)
    })
    it(`When House value is £87,995, stamp duty is £0`, () => {
        N = 87995
        const tax = solution(N)
        expect(tax.toLocaleString("en-GB", { style: "currency", currency: "GBP" })).toBe('£0.00')
        console.log(`
    Output matches manual entry: 0

        N: ${N}
        tax: ${tax}`)
    })

})


// // https://scrimba.com/learn/unittest/skipping-and-focusing-challenge-co357498e8ca7f507ef9003a6