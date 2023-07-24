 'use client'
import { useState, useEffect} from "react";
import PriceDisplay from "../../Components/pricedisplay";
import SweetAlert2 from 'react-sweetalert2';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DurationSelector from "../../Components/durationSelector";


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
          complete==true ? popupSuccess : popupFailure
 }

 const [locations, setLocations] = useState([]);
 const [selectedLocation, setSelectedLocation] = useState('');

 useEffect(() => {
   const appId = '8142409';
   const appSecret = 'XWLTK53ZYVVNRBHVUW294PSJJ6X9QYTK';
   const apiUrl = 'https://gps-naija.onrender.com/states/lagos'
   //'https://sandbox.sendstack.africa/api/v1/locations';

   // Fetch locations data from the API with authentication headers
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
       
       setLocations(data);
     })
     .catch((error) => {
       console.error('Error fetching locations:', error);
     });
 }, []);

 const handleChange = (event) => {
   setSelectedLocation(event.target.value);
 };

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
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Pickup Location</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedLocation}
        label="Pickup Location"
        onChange={handleChange}
      >
        {locations.map((location) => (
          <MenuItem key={location.id} value={location.name}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        </div>      
        <div className="my-20">
        <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Drop-off Location </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedLocation}
        label="Pickup Location"
        onChange={handleChange}
      >
        {locations.map((location) => (
          <MenuItem key={location.id} value={location.name}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
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
      