import React from 'react';
import Appbar from '../Appbar';
import Button from '../Button';
import { Box, Heading } from 'theme-ui';

export default {
  title: "UI Items/Header",
  component: Appbar,
}

const Template = (args) => <Appbar {...args} />;

export const primary = () => (
  <Appbar logo={'https://www.veeamsponsorships.com/veeamon/images/veeam-logo.png'}>
    <Heading as='h1' sx={{ color: 'white', fontSize: ['1em', '1.5em', '1.75em'] }}>
      Admin
    </Heading>
    <Box sx={{ display: 'flex' }}>
      <Button> Logout</Button>
    </Box>
  </Appbar>
)