console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Dime Que Me Odias - Guerra Fría", filePath: 'songs/1.mp3', coverPath: "covers/El Día En yo Muera.jpg"},
    {songName: "Y Mentrias Todos Bailan - Guerra Fría", filePath: "songs/2.mp3", coverPath: "covers/El Día En yo Muera.jpg"},
    {songName: "THE DOOR IS CLOSING - SPIRIT OF THE BEEHIVE", filePath: "songs/3.mp3", coverPath: "covers/thedoorisclosing.jpg"},
    {songName: "Eighth Wonder of the World - Cathedral Bells", filePath: "songs/4.mp3", coverPath: "covers/eightwonderoftheworld.jpg"},
    {songName: "крыша - bishkek", filePath: "songs/5.mp3", coverPath: "covers/безусловная любовь.jpg"},
    {songName: "безусловная любовь - bishkek", filePath: "songs/6.mp3", coverPath: "covers/безусловная любовь.jpg"},
    {songName: "Небо - bishkek", filePath: "songs/7.mp3", coverPath: "covers/Небо.jpg"},
    {songName: "¿Por que me siento así? - Guerra Fría", filePath: "songs/8.mp3", coverPath: "covers/shesmelllikeflowerandeath.jpg"},
    {songName: "El Día En yo Muera - Guerra Fiía", filePath: "songs/9.mp3", coverPath: "covers/El Día En yo Muera.jpg"},
    {songName: "Afuera Está Llovendio - Guerra Fría", filePath: "songs/10.mp3", coverPath: "covers/De los Recuerdos y el Odio.jpg"},
   
    {songName: "Vas - Jagger Finn", filePath: "songs/11.mp3", coverPath: "covers/triplbttheme.jpg"},
    {songName: "Please - Jagger Finn", filePath: "songs/12.mp3", coverPath: "covers/triplbttheme.jpg"},
    {songName: "Furcoat Me Not - Jagger Finn", filePath: "songs/13.mp3", coverPath: "covers/triplbttheme.jpg"},
    {songName: "Birch Tree - Strawberry Guy", filePath: "songs/14.mp3", coverPath: "covers/takingmytimetobe.jpg"},
    {songName: "What Would I Do? - Strawberry Guy", filePath: "songs/15.mp3", coverPath: "covers/whatwouldido.jpg"},
    {songName: "Without You - Strawberry Guy", filePath: "songs/16.mp3", coverPath: "covers/withoutyou.jpg"},
    {songName: "Wooden Girl - Pino Placentile", filePath: "songs/17.mp3", coverPath: "covers/woodengirl.jpg"},
    {songName: "Tesla - The Simps", filePath: "songs/18.mp3", coverPath: "covers/tesla.jpg"},
    {songName: "Something About You - Eyedress", filePath: "songs/19.mp3", coverPath: "covers/mulhollanddrive.jpg"},
    {songName: "Romantic Lover - Eyedress", filePath: "songs/20.mp3", coverPath: "covers/letsskiptothewedding.jpg"},

    {songName: "Drain You - Nirvana", filePath: "songs/21.mp3", coverPath: "covers/nevermind.jpg"},
    {songName: "TVI - Surf Curse", filePath: "songs/22.mp3", coverPath: "covers/tvi.jpg"},
    {songName: "Home - Vacations", filePath: "songs/23.mp3", coverPath: "covers/vibes.jpg"},
    {songName: "Telephone - Vacations", filePath: "songs/24.mp3", coverPath: "covers/changes.jpg"},
    {songName: "My Kind of Woman - MacDeMarco", filePath: "songs/25.mp3", coverPath: "covers/mykindofwoman.jpg"},
    {songName: "Lounge Act - Nirvana", filePath: "songs/26.mp3", coverPath: "covers/nevermind.jpg"},
    {songName: "On A Plain - Nirvana", filePath: "songs/27.mp3", coverPath: "covers/nevermind.jpg"},
    {songName: "Frances Farmer Will Have Her Revenge On Settle - Nirvana", filePath: "songs/28.mp3", coverPath: "covers/inutero.jpg"},
    {songName: "Pennyroyal Tea - Nirvana", filePath: "songs/29.mp3", coverPath: "covers/inutero.jpg"},
    {songName: "Serve The Servants - Nirvana", filePath: "songs/30.mp3", coverPath: "covers/inutero.jpg"},

    {songName: "Call Me - 90sFlav", filePath: "songs/31.mp3", coverPath: "covers/callme.jpg"},
    {songName: "The Eye of Truth - Driver", filePath: "songs/32.mp3", coverPath: "covers/bumps.jpg"},
    {songName: "nevermind, everything's okay - dreamcorp", filePath: "songs/33.mp3", coverPath: "covers/nevermindeverythingisokay.jpg"},
    {songName: "Tomorrow - Leavv", filePath: "songs/34.mp3", coverPath: "covers/tomorrow.jpg"},
    {songName: "Take Care - HM Surf", filePath: "songs/35.mp3", coverPath: "covers/takecare.jpg"},
    {songName: "Dust Collector - YG Hypnos", filePath: "songs/36.mp3", coverPath: "covers/dustcollector.jpg"},
    {songName: "Feeling Good - coldbrew", filePath: "songs/37.mp3", coverPath: "covers/feelinggood.jpg"},
    {songName: "winner - Houch", filePath: "songs/38.mp3", coverPath: "covers/winner.jpg"},
    {songName: "down - dontaskalex", filePath: "songs/39.mp3", coverPath: "covers/down.jpg"},
    {songName: "Easylike - CoryaYo", filePath: "songs/40.mp3", coverPath: "covers/easylike.jpg"},

    {songName: "Symbolic - Death", filePath: "songs/41.mp3", coverPath: "covers/symbolic.jpg"},
    {songName: "Holy Wars...The Punishment Due - Megadeth", filePath: "songs/42.mp3", coverPath: "covers/rustinpeace.jpg"},
    {songName: "Pull The Plug - Death", filePath: "songs/43.mp3", coverPath: "covers/leprosy.jpg"},
    {songName: "Lack of Comprehison - Death", filePath: "songs/44.mp3", coverPath: "covers/human.jpg"},
    {songName: "Master of Puppets - Metallica", filePath: "songs/45.mp3", coverPath: "covers/masterofpuppets.jpg"},
    {songName: "Lucrieta - Megadeth", filePath: "songs/46.mp3", coverPath: "covers/rustinpeace.jpg"},
    {songName: "Tornado of Souls - Megadeth", filePath: "songs/47.mp3", coverPath: "covers/rustinpeace.jpg"},
    {songName: "Choke on It - Death", filePath: "songs/48.mp3", coverPath: "covers/leprosy.jpg"},
    {songName: "Crystal Mountain - Death", filePath: "songs/49.mp3", coverPath: "covers/symbolic.jpg"},
    {songName: "Leprosy - Death", filePath: "songs/50.mp3", coverPath: "covers/leprosy.jpg"},

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=50){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})