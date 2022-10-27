const apiUrl="https://allsportsapi.com/api/football/?&met=Standings&leagueId=11&APIkey=e102c4ca30abf4a743921f46cb2b8d88cb0c91e72fce3589d47bfb5dd95d4558";

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