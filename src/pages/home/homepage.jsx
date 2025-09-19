import React from 'react'
import WeCreate from '../../components/home/WeCreate'
import WeProvide from '../../components/home/WeProvide'
import Quotations from '../../components/home/quotations'
import SimpleSolution from '../../components/home/SimpleSolution'
import OurAgency from '../../components/home/OurAgency'
import WhatClientSay from '../../components/home/WhatClientSay'

const homepage = () => {
  return (
    <>
        <WeCreate />
        <WeProvide />
        <Quotations />
        <SimpleSolution />
        <OurAgency />
        <WhatClientSay />
    </>
  )
}

export default homepage