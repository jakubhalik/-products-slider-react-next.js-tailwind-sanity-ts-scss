import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from 'lib/client';

const Product = ({ product: {
  image, name, slug, price150g, price300g, price1kg, price2kg, price3kg, availability
} }) => {

  const [heartTextColor, setHeartTextColor] = useState('text-slate-300');
  const [heartClicked, setHeartClicked] = useState(false);
  
  const heartHandleClick = () => {
    setHeartTextColor('text-red-400');
    setHeartClicked(true);
  };
  
    const [selectedSize, setSelectedSize] = useState('150g');
    const [price, setPrice] = useState(price150g);
  
    const handleSizeChange = (event) => {
      const selected = event.target.value;
      setSelectedSize(selected);
      switch (selected) {
        case '150g':
          setPrice(price150g);
          break;
        case '300g':
          setPrice(price300g);
          break;
        case '1kg':
          setPrice(price1kg);
          break;
        case '2kg':
          setPrice(price2kg);
          break;
        case '3kg':
          setPrice(price3kg);
          break;
        default:
          break;
      }
    };
  

  return (
<div className="reveal--n px-2 sm:px-6 lg:max-w-lg">
<div className="shadow-xl border rounded-2xl">
    <div className="flex font-sans items-center">
      <div className="flex-none w-32 h-52 relative sm:h-72 sm:w-48">
      <Link href={`/product/${slug.current}`}>
        <img src={urlFor(image && image[0])}
             className="absolute inset-0 w-full h-full object-cover
                        rounded-2xl" loading="lazy"/>
      </Link>
      </div>
      <form className="flex-auto px-2 sm:px-6 sm:py-1">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-sm sm:text-xl font-semibold text-slate-900">
        {name}
      </h1>
      <div className="text-xs pl-1 pt-1 sm:text-lg font-semibold text-slate-500">
        {price} Kč
      </div>
      <div className="w-full flex-none text-xs sm:text-sm font-medium text-slate-700 mt-2">
        {availability}
      </div>
    </div>
    <div className="flex items-baseline mt-1 sm:mt-4 mb-1 sm:mb-3 pb-1 sm:pb-3 border-b border-slate-200">
      <div className="space-x-2 flex text-xs sm:text-sm">
       <div className="grid grid-rows-2 grid-flow-col gap-2 sm:grid-rows-1">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="150g" checked={selectedSize === '150g'} onChange={handleSizeChange} />
          <div className="w-8 h-6
                          sm:w-9 sm:h-9 rounded-lg flex items-center justify-center 
                        text-white bg-slate-400 peer-checked:font-semibold 
                        peer-checked:bg-slate-900 hover:bg-slate-500">
            150g
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="300g" checked={selectedSize === '300g'} onChange={handleSizeChange} />
          <div className="w-8 h-6
                          sm:w-9 sm:h-9 rounded-lg flex items-center justify-center 
                        text-white bg-slate-400 peer-checked:font-semibold 
                        peer-checked:bg-slate-900 hover:bg-slate-500">
            300g
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="1kg" checked={selectedSize === '1kg'} onChange={handleSizeChange} />
          <div className="w-8 h-6
                          sm:w-9 sm:h-9 rounded-lg flex items-center justify-center 
                        text-white bg-slate-400 peer-checked:font-semibold 
                        peer-checked:bg-slate-900 hover:bg-slate-500">
            1kg
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="2kg" checked={selectedSize === '2kg'} onChange={handleSizeChange} />
          <div className="w-8 h-6
                          sm:w-9 sm:h-9 rounded-lg flex items-center justify-center 
                        text-white bg-slate-400 peer-checked:font-semibold 
                        peer-checked:bg-slate-900 hover:bg-slate-500">
            2kg
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="3kg" checked={selectedSize === '3kg'} onChange={handleSizeChange} />
          <div className="w-8 h-6
                          sm:w-9 sm:h-9 rounded-lg flex items-center justify-center 
                        text-white bg-slate-400 peer-checked:font-semibold 
                        peer-checked:bg-slate-900 hover:bg-slate-500">
            3kg
          </div>
        </label>
      </div>
     </div>
    </div>
    <div className="flex space-x-4 mb-1 sm:mb-3">
      <div className="flex-auto flex space-x-4">
        <button className="h-8 sm:h-10 px-2 sm:px-6 font-semibold rounded-md bg-black
                         text-white text-xs sm:text-sm font-medium active:sm:text-base
                           hover:h-9 hover:w-20 hover:sm:h-11 hover:sm:w-28
                           active:h-10 active:w-24 active:sm:h-12 active:sm:w-32" type="submit">
          Do košíku
        </button>
      </div>
      <button className={`flex-none flex items-center justify-center 
                         w-8 h-8 sm:w-9 sm:h-9 rounded-md border 
                       border-slate-200 focus:text-red-400 ${heartTextColor}
                       ${!heartClicked && 'hover:text-slate-400'}`} 
                       onClick={heartHandleClick} type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" 
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-xs sm:text-sm text-slate-700">
      Doprava zdarma od 499Kč.
    </p>
  </form>
</div>
</div>
<div className="pb-5"></div>
</div>
  )
}

export default Product;