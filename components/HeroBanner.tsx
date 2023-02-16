import React, { useEffect } from 'react';
import Link from 'next/link';
import { urlFor } from 'lib/client';

const HeroBanner = ({ heroBanner }) => {
  
  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random()*150}px`
        let random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])
  
  return (
    <div>
      <div className="absolute w-full text-white pl-6 pt-52 w-5/6 sm:pt-56 sm:pl-10 lg:pt-72 lg:pl-20 2xl:pt-96">
          <h3 className="typing /*hover--h decided to not have this one here, its a cool anim, but its too much, maybe can be used
                         sometime for some limited time, but its overdoin it, it doesnt fit there, sometimes less is more*/ 
                         font-bold text-5xl richtext display-title tracking-tighter break-words 
                         sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
            <span id="before-te1" className="absolute w-5/6 w-full h-full bg-transparent" 
            style={{ textShadow: "-2px 0 #000000", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">{heroBanner.largeText1}</span> 
            {/* glitch::before */}
            {heroBanner.largeText1}
            <span id="after-te1" className="absolute w-5/6 w-full h-full bg-transparent" 
            style={{ textShadow: "-2px 0 spin(#49FC00, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">
            {/*nothin here, just gonna use the before effect, this maybe later */}</span> 
            {/* glitch::after */}
          </h3>
          <div className="pt-1 sm:pt-2"></div>
          <div className="reveal--xl">
          <p className="reveal--ssm hover--desc sm:text-lg md:text-xl 2xl:text-2xl">{heroBanner.desc}</p>
          <Link href={`/product/${heroBanner.product}`}>
            <div className="pt-4 sm:pt-6"></div>
            <button className="reveal--ssm bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-xl active:py-2 active:px-4
                               sm:py-2 sm:px-6 sm:font-bold active:sm:py-3 active:sm:px-9 md:py-2 md:px-7 active:md:px-10 xl:py-4 xl:px-6 xl:text-xl 
                               active:xl:py-6 active:xl:px-9" 
                    type="button">
              {heroBanner.buttonText}
            </button>
          </Link>
        </div>
      </div>
        <img className="h-112 w-full object-cover lg:h-144 2xl:h-192" src={urlFor(heroBanner.image)} alt="coffee" />
        <div>
          <div>
          <h5 className="hover-2 reveal--n pt-5 pb-6 text-3xl sm:text-4xl md:text-5xl font-headline font-black tracking-snug text-center 
                         leading-12 hover: sm:leading-15 md:leading-19 lg:leading-26 text-gray-800">{heroBanner.largeText2}</h5>
          </div>
      </div>
    </div>
  )
}

export default HeroBanner;