class Lineup {
    static matchPlayers = []
    static init (parent, players) {
        let dom1 = document.createElement("div");
        dom1.classList.add("lineup");
        parent.appendChild(dom1);

        let dom2 = document.createElement("div");
        dom1.classList.add("match");
        parent.appendChild(dom2);

        let newPair = document.createElement("button");
        newPair.textContent = "Nytt par!";
        parent.appendChild(newPair)

        
        let match = document.createElement("button");
        match.textContent = "Natch!";
        parent.appendChild(match);

        for (let player of players) {
            Lineup.renderPlayer("lineup", player);
        }
    }

    static renderPlayer (where, player) {
        if (where != "lineup" && where != "match") {
            throw Error ("WTF?");
        }

        document.querySelector("." + where).appendChild(player.html);
    }

    static newPair () {

        if (Lineup.matchPlayers.length > 0) {
            Lineup.renderPlayer("lineup", Lineup.matchPlayers[0]);
            Lineup.renderPlayer("lineup", Lineup.matchplayers[1])
        }

        let players = Player.twoRandomPlayers();

        Lineup.renderPlayer("match", players[0]);
        Lineup.renderPlayer("match", players[1]);
        Lineup.matchPlayers = players;
    }

    static match () {
        let p1Choice = Lineup.matchPlayers[0].go();
        let p2Choice = Lineup.matchPlayers[1].go();


    }
}