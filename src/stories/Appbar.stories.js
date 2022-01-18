import React from 'react';
import Appbar from '../Appbar';
import Button from '../Button';
import { Box, Heading } from 'theme-ui';

import GCImage from './assets/gc.png'

export default {
  title: "UI Items/Header",
  component: Appbar,
}

const Template = (args) => <Appbar {...args} />;

export const primary = () => (
  <Appbar logo={GCImage}>
    <Heading as='h1' sx={{fontSize: ['1em', '1.5em', '1.75em'] }}>
      Admin
    </Heading>
    <Box sx={{ display: 'flex' }}>
      <Button> Logout</Button>
    </Box>
  </Appbar>
)