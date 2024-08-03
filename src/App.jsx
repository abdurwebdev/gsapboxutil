import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const App = () => {
  const [circles, setCircle] = useState(0);
  const [moveY, setmoveY] = useState(0);
  const [rotateX, setrotateX] = useState(0);
  const randomX = gsap.utils.random(-500, 500, 50);
  const randomY=gsap.utils.random(-300,300,50);
  const rotates=gsap.utils.random(-360,360,0);

  useEffect(() => {
    gsap.to('.circle', {
      x: circles,
      duration: 1,
      y:moveY,
      rotate:rotateX
    });
  },[circles,moveY,rotates] );

  return (
    <>
    <div className="w-full overflow-hidden boxes h-screen flex-col gap-y-5 flex items-center justify-center text-white bg-[#111]">
      <button
        onClick={() => {
          setCircle(randomX);
          setmoveY(randomY);
          setrotateX(rotates);
          
        }}
        className="rounded-3xl text-2xl px-10 py-5 text-white bg-yellow-300"
      >
        Animate
      </button>
      <div className="circle w-[200px] h-[200px] rounded-full bg-green-400"></div>
    </div>
    </>
  );
};

export default App;
