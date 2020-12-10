import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  }
});

export default Theme;
