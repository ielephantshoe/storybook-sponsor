import React from 'react';
import { Box, Heading, Text } from 'theme-ui';
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

export const UsageExample = () => (
  <Box id='tile-container' sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)'], gridGap: ['20px', '30px', '30px'] }}>
    {dataMany.map((item, index) => 
      <Tile key={index}>
      <Box id='tile-header' sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between', height: '60px', boxShadow: 'inset 0 -1px 0 0 #c4cdd5' }}>
        <Box id='tile-avatar' sx={{ width: '60px', height: '60px', position: 'relative', top: '30px', left: '30px' }}>
          <Box sx={{ backgroundColor: 'grey', height: '100%', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="50px">
              <path d="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z" fill={`${item.levelCode}`} />
            </svg>
          </Box>
        </Box>
        <Box id='tile-headline' sx={{ textTransform: 'uppercase', position: 'absolute', bottom: '11px', right: '20px', fontSize: ['0.75em'] }}>
          <Text>{item.sponsors} Sponsors</Text>
        </Box>
      </Box>
      <Box id='tile-info' sx={{ margin: '59px 0 0 30px;' }}>
        <Heading as='h3' sx={{ fontSize: '1rem', margin: '0 0 4px 0' }}>{item.name}</Heading>
        <Box id="last-update">{item.lastUpdated}</Box>
      </Box>
    </Tile>
    )}
  </Box >
)
