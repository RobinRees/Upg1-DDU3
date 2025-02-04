class Player {
    static allPlayers = [];

    static twoRandomPlayers () {
        let player1;
        let player2; 

        while(true) {
            player1 = Player.allPlayers[Math.floor(Math.random() * Player.allPlayers.length)];
            player2 = Player.allPlayers[Math.floor(Math.random() * Player.allPlayers.length)];

            if (player1 !== player2) {
                break;
            }
        }
        return [player1, player2];
    }
    constructor (data) {
        
        this.name = {
            first: data.name.first,
            middle: data.name.middle,
            last: data.name.last
        }
        this.color = data.color;
        this.wins = 0;
        this.selectedItem = "";
        this.playerDiv = this.createPlayerElement();

        Player.allPlayers.push(this);
    }


    createPlayerElement() {
        let fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;
        if (fullName.length > 20) {
            this.name.middle = this.name.middle.charAt(0) + ".";
        }
        fullName = `${this.name.first} ${this.name.middle} ${this.name.last}`;
        if (fullName.length > 20) {
            this.name.first = this.name.first.charAt(0) + ".";
        }



        const playerDiv = document.createElement("div");
        playerDiv.innerHTML = `<h2>${fullName}</h2>
        <p class="choice">Choice: ${this.selectedItem}</p>
        <p class=""wins>Wins: ${this.wins}</p>`;
        playerDiv.style.backgroundColor = this.color;
        document.querySelector("main").appendChild(playerDiv);
        return playerDiv;
    }

    go () {
        const choices = ["sten", "sax", "påse"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        this.selectedItem = choices[randomIndex];

        const choiceParagraph = this.playerDiv.querySelector(".choice");
        choiceParagraph.textContent = `Choice: ${this.selectedItem}`;
        return this.selectedItem;
    }

    won () {
        this.wins++;
        const winsParagraph = this.playerDiv.querySelector("wins");
        winsParagraph.textContent = `Wins: ${this.wins}`;
    }
}


let playerIndex = [
    {
      name: {first: "Kristoffer", middle: "Gustav", last: "Johansson"},
      color: "SkyBlue"
    },
    {
      name: {first: "Parvaneh", middle: "Shirin", last: "Farahani"},
      color: "Crimson"
    },
    {
      name: {first: "Anamarija", middle: "Ivana", last: "Kovačević"},
      color: "MediumSeaGreen"
    },
    {
      name: {first: "Abdulrahman", middle: "Mohammed", last: "Al-Masri"},
      color: "DarkOrange"
    }
  ];

const player1 = new Player(playerIndex[0]);
const player2 = new Player(playerIndex[1]);
const player3 = new Player(playerIndex[2]);
const player4 = new Player(playerIndex[3]);

const goButton = document.getElementById("goButton");

goButton.addEventListener("click", function () {
    for (let i = 0; i < Player.allPlayers.length; i++) {
        Player.allPlayers[i].go();
    }
})
