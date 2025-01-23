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
    }

    static renderPlayer (where, player) {
        if (where != "lineup" && where != "match") {
            throw Error ("WTF?");
        }

        document.querySelector("." + where).appendChild(player.html);
    }

    static newPair () {
        let players = player.twoRandomPlayers();
        this.renderPlayer("match", players[0].html);
        this.renderPlayer("match", players[1].html);
    }
}