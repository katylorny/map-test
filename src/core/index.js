import mapboxgl from "mapbox-gl";


export const initMap = async (component) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWxvcm55IiwiYSI6ImNrdnNhZDFjcmIxczgyb3M3azl6ZG8xamEifQ.egE0UVDX4gVCMuHly5a5gw';

    component.mapgl = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [37.3791660701041, 55.8306747998412], // starting position [lng, lat]
        zoom: 10 // starting zoom
    })
}