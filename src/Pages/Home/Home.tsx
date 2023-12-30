import React from 'react';
import './Home.css'
import CarouselHome from '../../Components/CarouselHome/CarouselHome';
import SliderBase from '../../Components/SliderBase/SliderBase';
import Gallery from '../../Components/Gallery/Gallery';
import Logos from '../../Components/Logos/Logos';
import Posters3D from '../../Components/Posters3D/Posters3D';





const Home: React.FC = () => {
  return (
   <>
   <CarouselHome/>
   <SliderBase/>
   <Gallery/>
   <Posters3D/>
   <Logos/>
   </>
  );
};

export default Home;
