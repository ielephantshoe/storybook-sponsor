import React from 'react';
import { Box } from 'theme-ui';
import Tile from '../Tile';

export default {
  title: "UI Items/Tile",
  component: Tile,
}

const data =
{
  "name": "Sloganaut",
  "levelCode": "#FF0",
  "sponsors": 23,
  "lastUpdated": "Last update 7 days ago",
  "href": "/test"
}

const dataMany = [
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

const Template = (args) => <Tile {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  name: data.name,
  levelCode: data.levelCode,
  sponsors: data.sponsors,
  lastUpdated: data.lastUpdated,
  href: data.href
}

export const UsageExample = () => (
  <Box id='tile-container' sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)'], gridGap: ['20px', '30px', '30px'] }}>
    {dataMany.map((item, index) =>
      <Tile key={index} {...item} />
    )}
  </Box>
)
