const apiUrl="https://allsportsapi.com/api/football/?&met=Standings&leagueId=11&APIkey=974962bef8ca02e68bf1b2383a2d172848684e4f8474e4122fe40babfc19bd83";

async function tablaPos(){
    const response=await fetch(apiUrl)
    const data=await response.json()
    console.log(data);
    let tableBody=document.getElementById("tbody")
    let num=1
    for(let i=0;i<28;i++){
        let pos= `<td>${data.result.total[i].standing_place}</td>`;
        let eq = `<td>${data.result.total[i].standing_team}</td>`;
        let pts = `<td>${data.result.total[i].standing_PTS}</td>`;
        tableBody.innerHTML += `<tr>${pos+eq+pts}</tr>`; 
    }
}

tablaPos()