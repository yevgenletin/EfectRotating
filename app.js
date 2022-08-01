const tableBody = document.getElementById('table-body');

console.log(tableBody)
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

populateTable(flights);