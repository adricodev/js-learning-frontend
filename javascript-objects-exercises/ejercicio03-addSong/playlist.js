const playlist ={
    title:"Rock clasico",
    creator: "Ana",
    songs: ["Bohemian Rhapsody", "Hotel california", "Stairway to Heaven"]
};

function addSong(playlistObj, songTitle){
    playlistObj.songs.push(songTitle);
    return playlistObj;
}

addSong(playlist, "Linkin Park - Numb");

console.log(playlist.songs);