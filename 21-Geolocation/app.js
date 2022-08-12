const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value'); 

navigator.geolocation.watchPosition(handleResult, (err) => {
    alert('Allow your location');
});



if ('geolocation' in navigator) { 
    navigator.geolocation.getCurrentPosition(handleResult);
}

function handleResult(position) {
    console.log(position);
    speed.textContent = position.coords.speed;
    arrow.style.transform = `rotate(${position.coords.heading}deg)`;
    console.log(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
}
