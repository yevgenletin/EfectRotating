const tableBody = document.getElementById('table-body');


let flights = [
    {
        time: "12:39",
        destination: "LONDON",
        flight: "CL 328",
        gate: "C 31",
        remarks: "CANCELED"
    },
    {
        time: "13,21",
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
console.log(flights)
function populateTable(){
    for(flight in flights)
        tableRow = document.createElement("tr")
        
       for(let flightDetails in flight){
            const tableCell = document.createElement("td");
            console.log(flightDetails)
       }
       tableBody.append(tableRow);
    }

populateTable();