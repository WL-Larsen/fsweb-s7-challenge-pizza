import React from 'react'
import './page.css'


export default function Lezzetus() {
  return (
    <div className=" bg-[#FAF7F2] w-full h-[600px] place-content-center flex flex-wrap gap-[15px] ">
      <div className='Lezzetus'>
        <h2 className='text-[65px] text-white quattrocento-sans-regular leading-[3rem] text-left p-[25px]' >Özel <br></br> Lezzetus</h2>
        <p className='text-left text-white pl-[25px]' >Position:Absolute Acı Burger</p>
        <div className='text-left pl-[25px] pt-[10px]'><button className='bg-white '>Sipariş Ver</button></div>
      </div>

      <div className='gap-[15px]'>
      <div className='Hackathlon '>
        <h2 className='text-[25px] text-white quattrocento-sans-regular leading-[1.5rem] text-left p-[25px] pb-[5pxpx]' >Hackathlon<br></br> Burger Menü</h2>
        <div className='text-left pl-[25px] pt-[5px] ]'><button className='bg-white w-[100px] h-[35px]'>Sipariş Ver</button></div>
      </div>
      <div className='Kurye'>
        <h2 className='text-[25px] text-white quattrocento-sans-regular leading-[1.5rem] text-left p-[25px] pb-[5pxpx]' >Hackathlon<br></br> Burger Menü</h2>
        <div className='text-left pl-[25px] pt-[5px] ]'><button className='bg-white w-[100px] h-[35px]'>Sipariş Ver</button></div>
      </div>
      </div>

    </div>
  )
}
