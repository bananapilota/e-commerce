import React from 'react'
import PreviewProducts from './PreviewProducts'

function ProductsContainer() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='mt-20 gap-8'>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        <PreviewProducts/>
        </div>
      </div>
    </>
  )
}

export default ProductsContainer