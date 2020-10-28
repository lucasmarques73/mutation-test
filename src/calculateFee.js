export default function calculateFee (amount) {
    if (amount > 500)
        return amount + (amount * (10/100))
    return amount
}