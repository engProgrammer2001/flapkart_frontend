import React from 'react'
import MainCarosel from '../../customer/components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../customer/components/HomeSectionCarosel/HomeSectionCarosel';
import MobileData from '../../Data/MobileData';
import IphoneCoverData from '../../Data/IphoneCoverData';
import ChargerData from '../../Data/ChargrData';

const Homepage = () => {
  // const filteredMobileData = MobileData.filter(item => item.brand === 'Oppo');
  return (
    <div>
        <MainCarosel/>
        <div className='py-20 space-y-20 px-5 lg:px-8'>
        <HomeSectionCarosel data={MobileData} sectionName={"Up to 60% off | Deals curated from stores nearby || Today’s Deals"}/>
        <HomeSectionCarosel data={IphoneCoverData} sectionName={"Iphon Cover || Up to 70% off | Top rated Cover products"}/>
        <HomeSectionCarosel data={ChargerData} sectionName={"Iphon Charger || Up to 70% off | Top rated Charfer products"}/>
      </div>
    </div>
  )
}

export default Homepage;