const apiUrl="https://apiv2.allsportsapi.com/basketball/?&met=Standings&leagueId=766&APIkey=e102c4ca30abf4a743921f46cb2b8d88cb0c91e72fce3589d47bfb5dd95d4558";

async function tablaBas(){
    const response=await fetch(apiUrl)
    const data=await response.json()
    console.log(data);
    let tableBody=document.getElementById("tbody")
    let num=1
    for(let i=0;i<29;i++){
        let pos= `<td>${data.result.total[i].standing_place}</td>`;
        let eq = `<td>${data.result.total[i].standing_team}</td>`;
        let pts = `<td>${data.result.total[i].standing_W}</td>`;
        tableBody.innerHTML += `<tr>${pos+eq+pts}</tr>`; 
    }
}

tablaBas()