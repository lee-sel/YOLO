import React from 'react'
import SpecialBody from './SpecialBody'
import Blank from '../Blank'
import SpecialHeading from './SpecialHeading'
import Menu from './Menu'
import MenuHeading from './MenuHeading'

function SpecialMain() {
  return (
    <div>
      <Blank />
      <SpecialHeading />
      <SpecialBody />
      <Blank />
      <MenuHeading />
      <Menu />
      <Blank />
    </div>
  )
}

export default SpecialMain