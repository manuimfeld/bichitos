import React from 'react'
import BestSellers from './BestSellers'
import Carousel from './Carousel'
import Category from './Category'

const Main = () => {
  return (
    <>
    <main>
      <Carousel />
      <BestSellers />
    </main>
      <Category />
    </>
  )
}

export default Main