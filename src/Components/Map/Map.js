import React, { useState } from 'react'
import L, { icon, marker } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, Pane, Circle, ZoomControl } from 'react-leaflet'
import locationIcon from '../../Assets/images/icon/locationIcon.png'
import './Map.scss'

const myicon = icon({
    iconUrl: locationIcon,
    iconSize: [38, 65],
    iconAnchor: [19, 65],
    popupAnchor: [0, -65],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
})

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click(e) {
            map.locate()
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={myicon}>
            <Popup>مبدا</Popup>
        </Marker>
    )
}

const Map = () => {
    return (
        <>
            <div className='Map'>
                <MapContainer
                    center={[35.697613, 51.338077]}
                    zoom={16}
                    // maxZoom={30}
                    attributionControl={true}
                    zoomControl={false}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                    className='map'
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
        </>
    )
}

export default Map
