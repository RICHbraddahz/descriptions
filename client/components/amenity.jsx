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
    anchor: [<FaAnchor/>, ' Anchor'],
    engine: [<FaRocket/>, ' Engine'],
    lifeJacket: [<FaLifeBouy/>, ' Life Jacket'],
    twoWayRadio: [<GoRadioTower/>, ' Two Way Radio'],
    soundSystem: [<MdMusicNote/>, ' Sound System'],
    tv: [<FaTelevision/>, ' TV'],
    kitchen: [<FaCutlery/>, ' Kitchen'],
    ac: [<TiWeatherSnow/>, ' AC'],
    heating: [<TiWeatherSunny/>, ' Heating'],
    inflatables: [<MdPool/>, ' Inflatables'],
    fishingGear: [<MdBusinessCenter/>, ' Fishing Gear'],
    scubaGear: [<TiWavesOutline/>, ' Scuba Gear'],
    harpoons: [<TiBrush/>, ' Harpoons'],
    sharkCage: [<FaAlignJustify/>, ' Shark Cage'],
    medication: [<MdBatteryStd/>, ' Medication'],
    wifi: [<FaWifi/>, ' Wifi'],
    pool: [<MdHotTub/>, ' Pool'],
  };
  return (
    <div className="amenity">
      <div className={'' + hasAmenity}>
        {signs[amenity][0]}
        {signs[amenity][1]}
      </div>
    </div>
  );
}

export default Amenities;
