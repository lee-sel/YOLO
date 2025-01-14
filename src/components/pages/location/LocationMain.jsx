import React from 'react'
import YoloMap from './YoloMap'
import Blank from '../Blank'
import LocationBody from './LocationBody'
import Locationheading from './Locationheading'


function LocationMain() {
  return (
    <div>
      <Blank />
      <Locationheading />
      <LocationBody />
      <YoloMap />
    </div>
  )
}

export default LocationMain