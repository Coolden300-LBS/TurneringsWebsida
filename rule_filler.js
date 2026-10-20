const RULES = [
    "Team size must be 3 players",
    "No duplicate characters allowed",
    "No changing team compositions once a match has started",
    "No use of cheats, exploits, or third-party modifications",
    "Matches are played in sessions of one with duration of 2 hours",
    "The team with the highest total score wins the match",
    "Unsportsmanlike conduct may result in disqualification",
    "Disqualified teams are removed from the match logs",
]

const TABLE_BODY3 = document.getElementById("main_rules_list");

RULES.forEach((rule, index) => {
    
    const row = document.createElement("tr")

    row.innerHTML = `
        <td>${index+1}.</td>
        <td>${rule}.</td>
    `

    TABLE_BODY3.appendChild(row)
})