const TEAM_DATA = [
    {
        name: "Veritypartiet",
        wins: 9,
        loses: 3,
        total_score: 842910
    },

    {
        name: "DatInfamous_Bo1s",
        wins: 6,
        loses: 6,
        total_score: 679210,
    },

    {
        name: "LBSGAC4AL0V3RS",
        wins: 5,
        loses: 7,
        total_score: 497020,
    },

    {
        name: "This_is_EBK",
        wins: 2,
        loses: 10,
        total_score: 109500,
    },

    {
        name: "BogosBinted (Disqualified)",
        wins: "-",
        loses: "-",
        total_score: 0,
    },
]

// we sort teams by score automatically!
TEAM_DATA.sort((a, b) => b.total_score - a.total_score)

const TABLE_BODY = document.getElementById("main_results_tableContent");

TEAM_DATA.forEach((team, index) => {
    
    const row = document.createElement("tr")

    var color = "inherit"
    if (index == 0) {
        color = "rgba(255, 255, 0, 0.49)"
    }
    else if (index == 1) {
        color = "rgb(204, 204, 204, 0.49)"
    }
    else if (index == 2) {
        color = "rgb(208, 121, 0, 0.49)"
    }

    row.innerHTML = `
        <td style="background-color: ${color};">${index+1}</td>
        <td>${team.name}</td>
        <td>${team.wins}</td>
        <td>${team.loses}</td>
        <td>${team.total_score}</td>
    `

    TABLE_BODY.appendChild(row)
})