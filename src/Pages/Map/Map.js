import React, { useState } from 'react'
import L, { icon, marker } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, Pane, Circle, ZoomControl } from 'react-leaflet'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
import CircleButton from '../../Components/CircleButton/CircleButton'
// import Overlay from '../../Components/Overlay/Overlay'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import home from '../../Assets/images/icon/home.png'
import profile from '../../Assets/images/icon/profile.png'
import locationIcon from '../../Assets/images/icon/locationIcon.png'

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

    // const [overlay, setOverlay] = useState(false)
    // const clickValue =(value)=>{
    //     console.log(value)
    //     setOverlay(value)
    // }


    return (
        <>
            <main className='Map'>

                <div className='mapContainer'>
                    <MapContainer
                        center={[35.697613, 51.338077]}
                        zoom={16}
                        maxZoom={30}
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
                        {/* <Marker position={[35.699739, 51.338064]} icon={myicon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker> */}
                        <LocationMarker />

                    </MapContainer>
                </div>












                <div className='topElments'>
                    <div className='circleButtonContainer'>
                        <CircleButton iconSrc={home} linkTo='/home' />
                    </div>
                    <div className='ToggleSwitchContainer'>
                        <ToggleSwitch />
                    </div>
                    <div className='circleButtonContainer'>
                        <CircleButton iconSrc={profile} linkTo='/profile' />
                    </div>
                </div>

                <div className='bottomElments'>
                    bottomElments
                        </div>

            </main>

            {/* {!overlay && <Overlay clickValue={clickValue}/>} */}
        </>
    )
}

export default Map
