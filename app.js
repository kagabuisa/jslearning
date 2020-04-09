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

function print({
    first,
    last,
    country
}) {
    //const {first,last} = greoner
    console.log(`${first}  ${last}, of the country ${country} in East Africa ${new date()}`)
}

const grades = [4.2, 4.8, 3.3, 4.4, 2.5, 3.2, 3.1, 4.9]
const getStats = (arr) => {
    const min = (Math.min(...grades));
    const max = (Math.max(...grades));
    const avg = (grades.reduce((sum, r) => {
        return sum + r
    })) / grades.length;
    const sum = (grades.reduce((sum, r) => {
        return sum + r
    }));
    return {
        sum,
        max,
        min: min,
        avg: avg
    }
}

console.log(getStats())

const role = 'Host';
const person = 'Joona Holland';
const role2 = 'Director';
const person2 = 'James Cameroon';

const team = {
    [role]: person,
    [role2]: person2
}

console.log(team, team * 2)

//method add,subtract,divide,multiply


const math = {

    add(x, y) {
        return x + y
    },

    subtract(x, y) {
        return x - y
    },

    divide(x, y) {
        return x / y
    },

    multiply(x, y) {
        return x * y
    },
    fullList() {
        console.log(this)
    }

}

const personName = {
    firstName: 'Kibuka',
    lastName: 'Mohan',
    fullName() {
        const {
            firstName,
            lastName
        } = this
        console.log(firstName)
    }
}

//   var date = new Date();
//   let curDate = date.getDate()
//   let curYear = date.getFullYear()
// var nextDate = date.getDate() + 20;
// date.setDate(nextDate);
// var newDate = date.toLocaleString();

// let doReport = {
//     "action": {
//       "id": 911899464,
//       "status": "in-progress",
//       "type": "snapshot",
//       "started_at": "2020-04-08T13:16:05Z",
//       "completed_at":""
//     }
//   }
// var date1 = new Date("July 19, 2014");
// var date2 = new Date(doReport.action.started_at.slice(0,10));
// let diffDate= Math.floor((date-date2)/(1000*60*60*24))/365
// let today = Date.now()
// let newCurDate = Math.floor(date.date2()+10);

function getSnapshotList() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer b55f0a04ae134281f185d86f0e2f5456baa43a6dfddb7edc3cbf30a5877c1985");
    myHeaders.append("Cookie", "__cfduid=dcea941712d2e0d1fbac975de663b92ac1586247452");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.digitalocean.com/v2/snapshots?page=1&per_page=1&resource_type=droplet", requestOptions)
    .then(response => response.json())
    //.then(response => response.json())
 
        .then(result => console.log(result))
        .then(success => {
            const gotSnapshots = response.json()
            return gotSnapshots
        })
        .catch(error => console.log('error', error));

}

getSnapshotList(); tangawiz, nimu, garlic