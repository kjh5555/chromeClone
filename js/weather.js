function onGeoOK(position){
    const lat =  position.coords.latitude;
    const lng =  position.coords.longitude
    console.log(`내 위치는 위도 : ${lat} 경도 :${lng}`)
}
function onGeoErr(){
    alert("날씨정보를 찾을 수 없어요 ㅠㅠ")
}




navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr)