const tableBody = document.getElementById('table-body');
const API_URL = 'https://opensky-network.org/api'
const xhr = new XMLHttpRequest();
let hour = 15;


function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        console.log('data',data)

    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', 'https://opensky-network.org/api/states/all');
xhr.send();

console.log(tableBody)

const destinations = ['TOKYO', 'KIEV', 'MADRID', 'LISBOA', 'FRANCIA', 'HELSINKI'];
const remarks = ['CANCELED', 'DELAYED', 'ONTIME'];
let time = 15;

let flights = [
    {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 328",
        gate: "C 31",
        remarks: "CANCELED"
    },
    {
        time: "13:21",
        destination: "DUBAI",
        flight: "DXB",
        gate: "A19",
        remarks: "CANCELED"
    },
    {
        time: "15:22",
        destination: "TOKYO",
        flight: "TK 211",
        gate: "A32",
        remarks: "DELAYED"
    },
    {
        time: "14:01",
        destination: "FRANKFURT",
        flight: "FR 482",
        gate: "B G2",
        remarks: "ON TIME"
    }


];

function populateTable(flights){
    for(const flight of flights){
        tableRow = document.createElement("tr")
       
       for(let flightDetails in flight){
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetails]);
            //tableCell.innerText = flight[flightDetails];
            tableRow.appendChild(tableCell);

            console.log( flightDetails, flight[flightDetails])

            for (const [index, letter] of word.entries()){
                const letterElement = document.createElement('div');
               
                setTimeout(()=>{
                    letterElement.classList.add('flip');
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);
            }
       }
       console.log('---------------------------------------')
       tableBody.append(tableRow);
    }
}



function shuffleUp(){
    flights.shift();
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random()*destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter()+ "" + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + '' + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    });
    tableBody.textContent = ""
    populateTable(flights)
}

function generateRandomLetter(){
    const alphabet = 'ABCDEFGHJKLMNOPQRSTVUWXYZ'
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length))
}

function generateRandomNumber(maxNumber){
    const number = '0123456789'
    if(maxNumber){
        const newNumbers = number.slice(0, maxNumber);
        return maxNumber.charAt(Math.floor(Math.random() * maxNumber.length)) 
    }
    return number.charAt(Math.floor(Math.random()* number.length))
}

function generateTime(){
    let displayHour = hour;
    
    if (hour < 24){
        hour++;
    }

    if(hour >= 24){
        hour = 1;
        displayHour = hour;
    }

    if (hour > 10){
        displayHour = 0 + hour;

    }

    return displayHour + ":"+ generateRandomNumber('5') + generateRandomNumber() 
}

//console.log('generate Random Leter', generateRandomLetter())
//console.log('generate Random Number', generateRandomNumber());
//console.log('generate Time', generateTime());
setInterval(shuffleUp, 2000)