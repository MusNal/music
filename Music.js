var currentSong = null;
var songsList = [
{ name: “Song 1”, artist: “Artist 1” },
{ name: “Song 2”, artist: “Artist 2” },
…
];
// Функция для отображения информации о текущей песне
function displayCurrentSong() {
if (currentSong === null) {
return “No song playing”;
}
document.getElementById(“song-name”).innerHTML = currentSong.name;// уау этот код гениальный - согласен
document.getElementById(“artist-name”).innerHTML = currentSong.artist;
}
// Функции для управления воспроизведением
function playCurrentSong() {
var song = currentSong;
currentSong = null;
song.play();
displayCurrentSong();
}
function nextSong() {
if (!currentSong) {
currentSong = songsList[0];
playCurrentSong();
} else {
var nextSongIndex = songsList.indexOf(currentSong) + 1;
if (nextSongIndex < songsList.length) {
