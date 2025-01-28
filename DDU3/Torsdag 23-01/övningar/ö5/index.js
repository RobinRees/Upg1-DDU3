
let db = [
    {
      "name": {"first": "Kristoffer", "middle": "Gustav", "last": "Johansson"},
      "color": "SkyBlue"
    },
    {
      "name": {"first": "Parvaneh", "middle": "Shirin", "last": "Farahani"},
      "color": "Crimson"
    },
    {
      "name": {"first": "Anamarija", "middle": "Ivana", "last": "Kovačević"},
      "color": "MediumSeaGreen"
    },
    {
      "name": {"first": "Abdulrahman", "middle": "Mohammed", "last": "Al-Masri"},
      "color": "DarkOrange"
    }
];

for (let x of db) {
    new Player(x);

    
}

Lineup.init(document.querySelector("main"), Player.allPlayers);