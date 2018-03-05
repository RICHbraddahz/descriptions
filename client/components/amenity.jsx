import React from 'react';
import './styles/amenity.scss';
import FaAnchor from 'react-icons/lib/fa/anchor';
import FaLifeBouy from 'react-icons/lib/fa/life-bouy';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import FaRocket from 'react-icons/lib/fa/rocket';
import FaTelevision from 'react-icons/lib/fa/television';
import FaWifi from 'react-icons/lib/fa/wifi';
import GoRadioTower from 'react-icons/lib/go/radio-tower';
import MdHotTub from 'react-icons/lib/md/hot-tub';
import MdMusicNote from 'react-icons/lib/md/music-note';
import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import TiBrush from 'react-icons/lib/ti/brush';
import MdPool from 'react-icons/lib/md/pool';
import MdBusinessCenter from 'react-icons/lib/md/business-center';
import MdBatteryStd from 'react-icons/lib/md/battery-std';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import TiWavesOutline from 'react-icons/lib/ti/waves-outline';


const Amenities = ({ amenity, hasAmenity }) => {
  const signs = {
    anchor: <FaAnchor/>,
    engine: <FaRocket/>,
    lifeJacket: <FaLifeBouy/>,
    twoWayRadio: <GoRadioTower/>,
    soundSystem: <MdMusicNote/>,
    tv: <FaTelevision/>,
    kitchen: <FaCutlery/>,
    ac: <TiWeatherSnow/>,
    heating: <TiWeatherSunny/>,
    inflatables: <MdPool/>,
    fishingGear: <MdBusinessCenter/>,
    scubaGear: <TiWavesOutline/>,
    harpoons: <TiBrush/>,
    sharkCage: <FaAlignJustify/>,
    medication: <MdBatteryStd/>,
    wifi: <FaWifi/>,
    pool: <MdHotTub/>,
  };
  return (
    <div className="amenity">
      <h4 className={'' + hasAmenity}>
        {signs[amenity]}
        {' ' + amenity}
      </h4>
    </div>
  );
}

export default Amenities;
