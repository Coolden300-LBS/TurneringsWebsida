const MATCHES_LOG = [

    {
        team1_name: "DatInfamous_Bo1s",
        team1_score: 229210,
        team2_name: "LBSGAC4AL0V3RS",
        team2_score: 167020,
        date: "10.10.2026"
    },

    {
        team1_name: "This_is_EBK",
        team1_score: 34500,
        team2_name: "Veritypartiet",
        team2_score: 282910,
        date: "12.09.2026"
    },

    {
        team1_name: "This_is_EBK",
        team1_score: 40000,
        team2_name: "DatInfamous_Bo1s",
        team2_score: 230000,
        date: "29.08.2026"
    },

    {
        team1_name: "Veritypartiet",
        team1_score: 280000,
        team2_name: "LBSGAC4AL0V3RS",
        team2_score: 170000,
        date: "16.08.2026"
    },

    {
        team1_name: "This_is_EBK",
        team1_score: 35000,
        team2_name: "LBSGAC4AL0V3RS",
        team2_score: 160000,
        date: "02.08.2026"
    },

    {
        team1_name: "Veritypartiet",
        team1_score: 280000,
        team2_name: "DatInfamous_Bo1s",
        team2_score: 220000,
        date: "24.07.2026"
    }

]

/* 
APPARENTLY all JS scripts share same global constants so when i tried
using TABLE_BODY without 2 it just didnt work at all

i hate how JS doesnt give error output. Or maybe its just me who didnt
figure out how to see it yet
*/

const TABLE_BODY2 = document.getElementById("main_matches_log");

MATCHES_LOG.forEach((team) => {
    
    const row = document.createElement("tr")

    var score1_color = "rgb(0, 255, 0)"
    var score2_color = "rgb(255, 0, 0)"
    if (team.team2_score > team.team1_score) {
        const temp = score2_color
        score2_color = score1_color
        score1_color = temp
    }

    row.innerHTML = `
        <td>${team.date}</td>
        <td style="text-align: right;">${team.team1_name}</td>
        <td style="color: ${score1_color};">${team.team1_score}</td>
        <td>vs</td>
        <td style="color: ${score2_color};">${team.team2_score}</td>
        <td style="text-align: left;">${team.team2_name}</td>
    `

    TABLE_BODY2.appendChild(row)
})