import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar';
import photo_one from '../../assets/photo_one.jpg';
import photo_two from '../../assets/photo_two.jpg';
import photo_three from '../../assets/photo_three.jpg';
import photo_four from '../../assets/photo_four.jpg';
import photo_five from '../../assets/photo_five.jpg';
import photo_six from '../../assets/photo_six.jpg';
import photo_seven from '../../assets/photo_seven.jpg';
import photo_eight from '../../assets/photo_eight.jpg';
import photo_nine from '../../assets/photo_nine.jpg';


const images = [
    {
        original: photo_one,
        thumbnail: photo_one,
    },
    {
        original: photo_two,
        thumbnail: photo_two,
    },
    {
        original: photo_three,
        thumbnail: photo_three,
    },
    {
        original: photo_four,
        thumbnail: photo_four,
    },
    {
        original: photo_five,
        thumbnail: photo_five,
    },
    {
        original: photo_six,
        thumbnail: photo_six,
    },
    {
        original: photo_seven,
        thumbnail: photo_seven,
    },
    {
        original: photo_eight,
        thumbnail: photo_eight,
    },
    {
        original: photo_nine,
        thumbnail: photo_nine,
    },
  ];
   

  export const Gallery = () => {
    return (
      <>
      <Navbar />
      <ImageGallery items={images} />
      <Footer />
    </>
    )
  }