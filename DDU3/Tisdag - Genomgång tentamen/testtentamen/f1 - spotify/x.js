let Artists = [
    {
        artists: { alias: "Wacky", id: 1 },  // Artist
        listeners: { alias: "Bouncy Bob", id: 2, follows: [1, 3] },  // Listener
        songs: { id: 1, genre: "Rock", title: "Song2", artist_id: 1, length: 288 },  // Song
        listens: { day: 10, time: "16:03", listener_id: 2, song_id: 1, length: 288 }  // Listen event
    }
];