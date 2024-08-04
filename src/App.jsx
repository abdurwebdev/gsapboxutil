import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const App = () => {
  useGSAP(()=>{
    const tl = gsap.timeline({ repeat: -1 });

    
    tl.to(".image-container", {
      width: "100%",
      duration: 2,
      ease: "expo.inOut",
      stagger: 2,
    });

    
    tl.to("#text h1", {
      top: 0,
      ease: "expo.inOut",
      stagger: 2,
      duration: 1, 
    },"-=6")
    .to("#text h1", {
      top: "-100%",
      ease: "expo.inOut",
      stagger: 2,
      duration: 1, 
      delay: 1, 
    },"-=6");
      
  })
  return (
    <div className='w-full h-screen bg-[#dadada] flex items-center justify-center'>
      <div id="text" className='font-bold capitalize text-9xl font-[Kajiro]'>
        <h1>CUBES.</h1>
        <h1>DIAMONDS.</h1>
        <h1>MIC.</h1>
      </div>
    <div className='w-[700px] h-[400px]  relative'>
      <div id='one' className="image-container w-full h-full bg-yellow-200 absolute ">
        <img  className='h-full object-cover' src="https://images.unsplash.com/photo-1655499603560-6f834760f8d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="image-container w-0 bg-yellow-700 h-full  absolute">
        <img className='h-full object-cover' src="https://images.unsplash.com/photo-1653405507161-da7d205d86f4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div  className="image-container w-0 h-full  absolute">
        <img className='h-full object-cover' src="https://images.unsplash.com/photo-1645102322652-e5d7ed3fef8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  </div>
  )
}

export default App