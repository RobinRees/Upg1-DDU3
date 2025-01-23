class Player {

    static allPlayers = [];
    static twoRandomPlayers () {
        let playerOne = null; 
        let playerTwo = null; 
        const randomIndex = Math.floor(this.allPlayers.length * Math.random()); 

        for (let players of this.allPlayers) {
            playerOne = players[randomIndex];
            playerTwo = players[randomIndex];
            if (playerOne === playerTwo) {
                playerTwo = players[randomIndex];
            } else {
                return [playerOne. playerTwo];
            }
        }

    }


    constructor (data) {
        Player.allPlayers.unshift(this);


        this.name = data.name;
        this.color = data.color;
        this.wins = 0;

        let first = this.name.first;
        let middle = this.name.middle;
        let last = this.name.last;
        if (first.length + middle.length + last.length > 20) {
            middle = middle[0].toUpperCase();
            if (first.length + middle.length + last.length > 20) {
                first = first[0].toUpperCase();
            }
        }

        let stringName = `${first} ${middle} ${last}`;


        this.html = document.createElement("div");
        this.html.innerHTML = `<pt>${stringName}</p>
        <p>Choice: <span class="choice"></span></p>
        <p>Wins: <span class="wins">0</span></p>
        `
        this.html.style.backgroundColor = this.color;

    }
    go() {
        const choices = ["sax", "sten", "påse"];
        const randomIndex = Math.floor(choices.length * Math.random());
        return choices[randomIndex];
    }

    won () {
        this.wins++;
        this.html.querySelector(".wins").textContent = this.wins;
    }
}



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
    document.body.appendChild(Player.allPlayers[0].html);

    
}