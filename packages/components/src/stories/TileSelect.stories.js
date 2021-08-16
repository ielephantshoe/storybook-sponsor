import React from 'react';
import TileSelect from '../TileSelect';
import { Box, Heading } from 'theme-ui';

export default {
  title: "UI Items/TileSelect",
  component: TileSelect,
}

const data = [
  {
    "name": "Norali",
    "levelCode": "#CD7F32",
    "sponsors": 66,
    "lastUpdated": "Last update 3 days ago"
  },
  {
    "name": "Accel",
    "levelCode": "#C0C0C0",
    "sponsors": 54,
    "lastUpdated": "Last update 14 days ago"
  },
  {
    "name": "Gluid",
    "levelCode": "#C0C0C0",
    "sponsors": 65,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Spherix",
    "levelCode": "#FF0",
    "sponsors": 56,
    "lastUpdated": "Last update 20 days ago"
  },
  {
    "name": "Marqet",
    "levelCode": "#CD7F32",
    "sponsors": 49,
    "lastUpdated": "Last update 11 days ago"
  },
  {
    "name": "Zytrek",
    "levelCode": "#CD7F32",
    "sponsors": 27,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Sloganaut",
    "levelCode": "#FF0",
    "sponsors": 23,
    "lastUpdated": "Last update 7 days ago"
  }
]

const Template = (args) => <TileSelect {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  data: data,
}
