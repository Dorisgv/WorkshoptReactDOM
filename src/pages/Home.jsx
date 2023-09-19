// import { ChakraProvider, CSSReset, extendTheme, Box } from '@chakra-ui/react';
/* ---------------------------------------------------------------------------- */
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';
/* ---------------------------------------------------------------------------- */
// Aqui definimos el tema de Chakra UI si es necesario.
// const theme = extendTheme({

// });
/* ---------------------------------------------------------------------------- */
const Home = () => {
  return (
    <>
      {/* Aquí invocamos todos los otros componentes */}
      <Header />
       <Gallery /> 

      {/* <ChakraProvider theme={theme}>
        <CSSReset />
        <Box textAlign="center" fontSize="xl">
          <Gallery />
        </Box>
      </ChakraProvider> */}
    </>
  );
};

export default Home;

