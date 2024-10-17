const timeDisplay = document.getElementById('timeDisplay');


function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const suffix = hours >= 12 ? "PM" : "AM";
    let link
    if (hours < 5){
        link = "https://t4.ftcdn.net/jpg/06/60/84/59/360_F_660845913_mqCzord69qkBY63nTVrW8fZW5YLVrjxS.jpg";
    }
    else if (hours < 11){
        link = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2e9d59-ee54-490e-bf96-5497f587844f/dgctbzn-e9cd58bf-0781-4b24-8efb-04ae3aebead1.jpg/v1/fill/w_1600,h_800,q_75,strp/sunrise_4k_anime_wallpaper_by_cyberxyt_dgctbzn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvOWMyZTlkNTktZWU1NC00OTBlLWJmOTYtNTQ5N2Y1ODc4NDRmXC9kZ2N0YnpuLWU5Y2Q1OGJmLTA3ODEtNGIyNC04ZWZiLTA0YWUzYWViZWFkMS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AL8M61P9gQtCqWdg2gKIt1SQtYXNw3KjRrg5m5Ldl3c";
    }
    else if (hours < 17){
        link = "https://t4.ftcdn.net/jpg/08/71/46/29/240_F_871462918_Wqes0fP4134M3A8sToSiRVk5tfEl2Ed0.jpg";
    }
    else if(hours < 21){
        link = "https://t3.ftcdn.net/jpg/07/93/99/44/240_F_793994473_VD47q7y003VpWwhmjRZV0iS3su02zRya.jpg";
    }
    else{
        link = "https://t4.ftcdn.net/jpg/06/60/84/59/360_F_660845913_mqCzord69qkBY63nTVrW8fZW5YLVrjxS.jpg";
    }
    document.body.style.backgroundImage = `url(${link})`;
    hours = hours % 12 || 12
    timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)} ${suffix}`
}

updateClock()
setInterval(updateClock, 1000);
