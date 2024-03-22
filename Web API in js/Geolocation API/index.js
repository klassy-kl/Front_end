// navigator.geolocation.getCurrentPosition(onSuccess,onError);

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess,onError)

    function onSuccess(location){
        let x=location.coords.latitude
        let y=location.coords.longitude
        console.log('latitude: '+x, "\n"+ 'longitude: '+y);
    }
    function onError(location){
        console.log('Failed to get location');
    }
}
