import mapboxgl from "mapbox-gl";
import {MapboxLayer} from "@deck.gl/mapbox";
import {ArcLayer} from "@deck.gl/layers";

export const initMap = async (component) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWxvcm55IiwiYSI6ImNrdnNhZDFjcmIxczgyb3M3azl6ZG8xamEifQ.egE0UVDX4gVCMuHly5a5gw';

    component.mapgl = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-122.269029, 37.80787], // starting position [lng, lat]
        zoom: 14, // starting zoom
        pitch: 60,
        bearing: 60
    })

    const data = [
        {
            inbound: 72633,
            outbound: 74735,
            from: {
                name: '19th St. Oakland (19TH)',
                coordinates: [-122.269029, 37.80787]
            },
            to: {
                name: '12th St. Oakland City Center (12TH)',
                coordinates: [-122.271604, 37.803664]
            }
        }
    ]

    component.mapgl.on('load', () => {
        const options = {
            pickable: true,
            getWidth: 12,
            getSourcePosition: d => d.from.coordinates,
            getTargetPosition: d => d.to.coordinates,
            getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
            getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
        }

        const layer = new MapboxLayer({
            id: 'matrix_arcs',
            type: ArcLayer,
            data,
            ...options
        })
        component.mapgl.addLayer(layer)
    })

}