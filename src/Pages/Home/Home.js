import React, { useState } from 'react'
import Map from '../../Components/Map/Map'
import ToggleSwitch from '../../Components/ToggleSwitch/ToggleSwitch'
import CircleButton from '../../Components/CircleButton/CircleButton'
import Overlay from '../../Components/Overlay/Overlay'
import './Home.scss'
import 'leaflet/dist/leaflet.css'
import home from '../../Assets/images/icon/home.png'
import profile from '../../Assets/images/icon/profile.png'




const Home = () => {

    const [overlay, setOverlay] = useState(false)
    const clickValue =(value)=>{
        console.log(value)
        setOverlay(value)
    }


    return (
        <>
            <main className='Map'>
                <div className='mapContainer'>
                    <Map/>
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

            {!overlay && <Overlay clickValue={clickValue}/>}
        </>
    )
}

export default Home
