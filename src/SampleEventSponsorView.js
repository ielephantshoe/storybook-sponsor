import Tile from './Tile';
import Appbar from './Appbar';
import Button from './Button';
import { Box, Heading, Input, Text } from 'theme-ui';
import { useState } from 'react';


//------------------------------------------------------------------------------
import GCImage from './stories/assets/gc.png'
import SponsorTable from './SponsorTable';
//------------------------------------------------------------------------------

const formdata =
  [
    {
      "guid": "72e56d08-367a-42bf-a17f-33dda0490d6a",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "MEDIFAX",
      "invoiceStatus": "Invoiced",
      "level": "Silver Sponsor",
      "mainContact": "Wagner Payne",
      "secondContact": "Mara Giles",
      "email": "maragiles@medifax.com",
      "street": "497 Noll Street",
      "city": "Trexlertown",
      "state": "Indiana",
      "zip": 5285,
      "country": "Country",
      "registered": "2019-08-18",
      "files": [
        {
          "id": 0,
          "name": "Buzzness",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Decratex",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Geologix",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Ginkogene",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "02c8df48-49f1-4829-8ecd-dd0965cab98c",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "PHOLIO",
      "invoiceStatus": "New",
      "level": "Silver Sponsor",
      "mainContact": "Navarro Hester",
      "secondContact": "Merritt Sykes",
      "email": "merrittsykes@pholio.com",
      "street": "946 Raleigh Place",
      "city": "Wattsville",
      "state": "Nevada",
      "zip": 9344,
      "country": "Country",
      "registered": "2019-06-28",
      "files": [
        {
          "id": 0,
          "name": "Insurety",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Geeketron",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Interodeo",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Magneato",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 4,
          "name": "Zoarere",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "c3822fc9-0d29-4398-aa6e-18309a20eb76",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "SILODYNE",
      "invoiceStatus": "Invoiced",
      "level": "Poor Sponsor",
      "mainContact": "Shelia Terrell",
      "secondContact": "Jaclyn Chavez",
      "email": "jaclynchavez@silodyne.com",
      "street": "557 Fillmore Place",
      "city": "Torboy",
      "state": "Marshall Islands",
      "zip": 2118,
      "country": "Country",
      "registered": "2017-03-21",
      "files": [
        {
          "id": 0,
          "name": "Melbacor",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Zanity",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Signidyne",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Earthwax",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 4,
          "name": "Repetwire",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 5,
          "name": "Eventex",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "a451dc15-1ec3-42fc-9619-15a7278e8969",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "PORTALIS",
      "invoiceStatus": "Invoiced",
      "level": "Gold Sponsor",
      "mainContact": "Jayne Herman",
      "secondContact": "Clemons Curtis",
      "email": "clemonscurtis@portalis.com",
      "street": "825 Court Square",
      "city": "Albrightsville",
      "state": "Virginia",
      "zip": 5476,
      "country": "Country",
      "registered": "2020-09-23",
      "files": [
        {
          "id": 0,
          "name": "Microluxe",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Equitox",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Gorganic",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Gology",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "4756677b-7bd2-4340-98f2-be8abba14efa",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "IPLAX",
      "invoiceStatus": "Passed Due",
      "level": "Gold Sponsor",
      "mainContact": "Kay Stout",
      "secondContact": "Mckee Hardin",
      "email": "mckeehardin@iplax.com",
      "street": "588 Metropolitan Avenue",
      "city": "Martell",
      "state": "New Hampshire",
      "zip": 6693,
      "country": "Country",
      "registered": "2016-03-25",
      "files": [
        {
          "id": 0,
          "name": "Insuresys",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Zillidium",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Fiberox",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Rotodyne",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 4,
          "name": "Balooba",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "3e42f361-96ee-4634-b1d4-f615e98bc4d5",
      "isActive": true,
      "picture": "http://placehold.it/32x32",
      "name": "FRANSCENE",
      "invoiceStatus": "Invoiced",
      "level": "Poor Sponsor",
      "mainContact": "Cannon Gross",
      "secondContact": "Short Dennis",
      "email": "shortdennis@franscene.com",
      "street": "429 Montgomery Street",
      "city": "Sardis",
      "state": "Wyoming",
      "zip": 8807,
      "country": "Country",
      "registered": "2016-04-30",
      "files": [
        {
          "id": 0,
          "name": "Stockpost",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Momentia",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Zolarex",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Zenthall",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 4,
          "name": "Illumity",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 5,
          "name": "Suremax",
          "href": "http://placehold.it/250x250"
        }
      ]
    },
    {
      "guid": "8705ef69-12bd-4471-937c-c55c7025657a",
      "isActive": false,
      "picture": "http://placehold.it/32x32",
      "name": "GAZAK",
      "invoiceStatus": "Paid",
      "level": "Poor Sponsor",
      "mainContact": "Bonita Prince",
      "secondContact": "Ina Phillips",
      "email": "inaphillips@gazak.com",
      "street": "700 Arion Place",
      "city": "Websterville",
      "state": "Kentucky",
      "zip": 5257,
      "country": "Country",
      "registered": "2018-07-16",
      "files": [
        {
          "id": 0,
          "name": "Exoswitch",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 1,
          "name": "Zaggles",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 2,
          "name": "Applideck",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 3,
          "name": "Neurocell",
          "href": "http://placehold.it/250x250"
        },
        {
          "id": 4,
          "name": "Zounds",
          "href": "http://placehold.it/250x250"
        }
      ]
    }
  ]


export default function SampleEventSponsorView({ data }) {
  return (
    <Box>
      <Appbar logo={GCImage}>
        <Box sx={{ display: 'grid', gridAutoFlow: 'row', justifyContent: 'center', gridGap: '2em', marginBlock: '2em', color: 'grey' }}>
          <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
            <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home fa-w-18 fa-2x"><path fill="currentColor" d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" class=""></path></svg>
            <Text>Home</Text>
          </Box>
          <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
            <svg width='30' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path></svg>
            <Text>Branding</Text>
          </Box>
          <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
            <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z"></path></svg>
            <Text>Sponsor List</Text>
          </Box>
          <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
            <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"></path></svg>
            <Text>Resources</Text>
          </Box>
          <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
            <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
            <Text>Account</Text>
          </Box>
        </Box>
      </Appbar>

      <Box sx={{ overflow: 'hidden', position: 'fixed', zIndex: -2 }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="3000" height="1000" preserveAspectRatio="none" viewBox="0 0 3000 1000">
          <g mask="url(&quot;#SvgjsMask1089&quot;)" fill="none">
            <path d="M2610.15-97.1C2185.69-48.74 1926.29 888.18 1215.8 890.77 505.3 893.36 186.94 455.95-178.56 450.77" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
            <path d="M1649.95-91.49C1436.1-55.08 1531.45 451.69 989.57 471.37 447.69 491.05 8.55 789.1-331.18 791.37" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
            <path d="M1739.36-80.89C1455.95 18.2 1567.64 853.2 989.17 856.92 410.7 860.64-123.02 460.33-511.2 456.92" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
            <path d="M1821.89-137.98C1618.29-106.46 1717.21 356.87 1182.93 382.49 648.64 408.11 242.03 806.78-95 812.49" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
            <path d="M1986.97-15.7C1781.63-14.28 1808.88 174.2 1189.19 179.83 569.5 185.46 8.07 625.55-406.36 629.83" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
          </g>
          <defs>
            <mask id="SvgjsMask1089">
              <rect width="3000" height="1000" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </Box>

      <Box sx={{ maxWidth: '1400px', marginInline: 'auto', marginBlock: '2em', padding: ['1em', '3em', '3em'], background: 'white' }}>
        <Heading sx={{ textAlign: 'center', textTransform: 'uppercase' }}>Sponsors List</Heading>
        <SponsorTable data={formdata} />
      </Box>
    </Box>
  )
}
