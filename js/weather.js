const APIKEY = "1f9727d1268500becf8a6fa2578eb20e";

function onGeoOK(position){
    const lat =  position.coords.latitude;
    const lng =  position.coords.longitude
    console.log(`내 위치는 위도 : ${lat} 경도 :${lng}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weatherCon = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weatherCon.innerText = data.weather[0].main;
    });
}
function onGeoErr(){
    alert("날씨정보를 찾을 수 없어요 ㅠㅠ")
}




navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr)