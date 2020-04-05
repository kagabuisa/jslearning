let name = "Kagabu Isa"
console.log(name);
let catherine = "accountant"

function cate() {
    return `${name} ${catherine}`
}

cate()

const runnerx = {
    first: 'Isakale',
    last: 'Kagabu',
    country: 'Uganda',
    title: 'Hajji'
}
const now = '05-04-2020'
function print({ first, last, country }) {
    //const {first,last} = greoner
    console.log(`${first}  ${last}, of the country ${country} in East Africa ${new date()}`)
}

const grades = [4.2, 4.8, 3.3, 4.4, 2.5, 3.2, 3.1, 4.9]
const getStats = (arr) => {
    const min = (Math.min(...grades));
    const max = (Math.max(...grades));
    const avg = (grades.reduce((sum, r) => { return sum + r })) / grades.length;
    const sum = (grades.reduce((sum, r) => { return sum + r }));
    return {
        sum,
        max,
        min: min,
        avg: avg
    }
}

console.log(getStats())

