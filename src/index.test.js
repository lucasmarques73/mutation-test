import calculateFee from '.'

describe('calculateFee', () => {
    it('Should return the amount with fee', () => {
        const amount  = 800
        const amountWithFee = 880
        expect(calculateFee(amount)).toBe(amountWithFee)
    })
    it('Should return the amount without fee', () => {
        const amount  = 300
        const amountWithFee = 300
        expect(calculateFee(amount)).toBe(amountWithFee)
    })
})