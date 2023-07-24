 'use client'
import { useState, useEffect} from "react";
import PriceDisplay from "../../Components/pricedisplay";
import SweetAlert2 from 'react-sweetalert2';
import DurationSelector from "../../Components/durationSelector";
import LocationDropdownPickup from "../../Components/locationDropdown-pickup";
import LocationDropdownDelivery from "../../Components/locationDropdown-delivery";


export default function Home() {
var hover = "hover: bg-blue-600"
   var complete=false

  const [swalprops,setswalprops] = useState ({})
 const popup = ()=>{
   const popupSuccess =()=>{
            setswalprops({
                    icon: 'success',
                    show: true,
                    title: 'Successful',
                    text: 'Waybill confirmed!',
            })}
  const popupFailure =()=>{
          setswalprops({
                  icon: 'info',
                  show: true,
                  title: 'Failed',
                  text: 'Waybill reversed!',
          })} 
          complete==true ? popupSuccess() : popupFailure()
 }

  return (
   <>
   <div className='flex flex-col h-full w-full p-2'>
      <SweetAlert2 {...swalprops}/>  
      <p className='font-bold text-xl ml-2'>Sendstack</p>
      <div className="flex flex-col sm:justify-center sm:items-center m-4 sm:m-0 mt-10 mb-20">
          <div className="text-bold text-lg">Plan Your Ride</div>
          
        <div className="text-sm"> Enter pickup & dropoff details. Estimate instantly.</div>
      </div>
      <div className='  h-60 m-4 rounded flex flex-col justify-center itmes-center'>
      <div className="mt-40 ">

      <LocationDropdownPickup></LocationDropdownPickup>

        </div>      
        <div className="my-20">

       <LocationDropdownDelivery></LocationDropdownDelivery>

        </div>
        <DurationSelector></DurationSelector>     
        </div>
      <div className="mt-60 flex items-center justify-center">
        <PriceDisplay className="shadow-sm text-center  w-full p-12"></PriceDisplay>
      </div>
      <div className='flex absolute bottom-0 w-full justify-center items-center'>
        <button onClick={popup} className='text-slate-100 bg-gray-500 hover:bg-blue-700 rounded-full text-lg py-3 px-32'>Confirm</button>
      </div>
   </div>
   </>
  )
        }
      