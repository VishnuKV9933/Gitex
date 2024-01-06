import React, { useEffect } from 'react';
import './Home.css'
import CarouselHome from '../../Components/CarouselHome/CarouselHome';
import SliderBase from '../../Components/SliderBase/SliderBase';
import Gallery from '../../Components/Gallery/Gallery';
import Logos from '../../Components/Logos/Logos';
import Posters3D from '../../Components/Posters3D/Posters3D';
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(menuClose());
    
  },[])
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
