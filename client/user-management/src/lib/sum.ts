export default function sum(...number: number[]): number {
    return number.reduce((total, num) => total + num, 0)
}