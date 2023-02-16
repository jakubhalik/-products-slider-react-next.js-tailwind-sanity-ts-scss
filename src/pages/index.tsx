import React, { useState, useEffect } from 'react';
import { Product, FooterBanner, HeroBanner } from 'components';
import { client } from 'lib/client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = ({ products, bannerData }) => {

  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    setIsLgScreen(window.innerWidth >= 1024);
    const handleWindowResize = () => setIsLgScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const CustomArrow = ({ onClick, direction }) => (
    <button className="reveal--arrow absolute right-8 xl:right-14 top-1/4 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full 
                       shadow-md z-10 bg-gray-800 hover:bg-indigo-400" onClick={onClick}>
      {direction === "prev" ? "" : ""}
      <svg class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-white hover:text-white 
                   hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
        </svg>
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isLgScreen ? 2.035 : 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {isLgScreen ? (
          <Slider {...settings}>
            {products.sort((a, b) => a.order - b.order).map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Slider>
        ) : (
          products.sort((a, b) => a.order - b.order).map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
);
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
