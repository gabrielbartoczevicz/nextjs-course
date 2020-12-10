import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Theme from '../../styles/Theme';

const ThemeContainer: React.FC = ({ children }) => (
  <ChakraProvider
    theme={Theme}
  >
    <ColorModeScript initialColorMode="system" />
    {children}
  </ChakraProvider>
);

export default ThemeContainer;
