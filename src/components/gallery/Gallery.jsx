import './galleryStyle.scss';

import tierra from '../../assets/images/desktop/image-deep-earth.jpg';
import noche from '../../assets/images/desktop/image-night-arcade.jpg';
import futbol from '../../assets/images/desktop/image-soccer-team.jpg';
import carro from '../../assets/images/desktop/image-grid.jpg';
import camino from '../../assets/images/desktop/image-from-above.jpg';
import auroras from '../../assets/images/desktop/image-pocket-borealis.jpg';
import robot from '../../assets/images/desktop/image-curiosity.jpg';
import ojo from '../../assets/images/desktop/image-fisheye.jpg';

// import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';

const Gallery = () => {
  const img = [{
    image: tierra,
    text: 'DEEP EARTH'  
  },
  {
    image: noche,
    text: 'NIGHT ARCADE'  
  },
  {
    image: futbol,
    text: 'SOCCER TEAM VR'  
  },
  {
    image: carro,
    text: 'THE GRID'  
  },
  {
    image: camino,
    text: 'FROM UP ABOVE VR'  
  },
  {
    image: auroras,
    text: 'POCKET BOREALIS'  
  },
  {
    image: robot,
    text: 'THE CURIOSITY'  
  },
  {
    image: ojo,
    text: 'MAKE IT FISHEYE'  
  },
  ]
    return (
        <section className='container'>
      <div className='title'>
        <h1>OUR CREATIONS</h1>
        <button className='see'>SEE ALL</button>
      </div>

      {/* <Box p={4}>
  <Grid 
    templateColumns="repeat(4, 1fr)" // 4 columnas
    templateRows="repeat(2, 1fr)"    // 2 filas
    gap={4}
  > */}
  <section className='container-image'>
  {
      img.map((item, index) =>(
        <article className='cardImg' key = {index}>
      <img className='img' src={item.image} alt="earth" />
      <span className='cardText'>{item.text}</span>
    </article>
      ))
    }
  </section>
    
  {/* </Grid>
</Box> */}

    </section>
    )
}
export default Gallery;
