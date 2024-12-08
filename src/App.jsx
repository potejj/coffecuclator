import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function calculation(){
    
let coffe = 15
let watter = 200
let bloom = true
let bloom_ratio = 3
let ratio = 0

    if(bloom){
  return (
    <>
      <div className='data'>
       <input type='text' placeholder="{coffe}" className='coffe'/> 
       <input type='text' placeholder="{watter}" className='watter'/> 
       <input type='text' placeholder="{bloom_ratio}" className='bloom'/> 
      </div>
    </>
  )
    }
    else{
    }
}
export default App
