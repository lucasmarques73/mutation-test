import isAdult from './isAdult'

describe('isAdult', () => {
    it('Should return true if is Adult', () => {
        const age = 25
        expect(isAdult(age)).toBe(true)
    })

    it('Should return true if is Adult', () => {
        const age = 18
        expect(isAdult(age)).toBe(true)
    })

    it('Should return false if is not Adult', () => {
        const age = 12
        expect(isAdult(age)).toBe(false)
    })
})