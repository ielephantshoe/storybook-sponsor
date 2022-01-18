
import SampleDashboard from '../SampleDashboard';

import IntelImage from './assets/intel.png'
import AmdImage from './assets/amd.png'
import GCImage from './assets/gc-dash.png'

export default {
  title: "Sample Admin Pages/Admin Landing",
}

const dataMany = [
  {
    "name": "Norali",
    "iconImg": IntelImage,
    "level": "Poor Sponsor",
    "mainContact": "Bonita Prince",
    "sponsors": 66,
    "lastUpdated": "Last update 3 days ago"
  },
  {
    "name": "Accel",
    "iconImg": AmdImage,
    "level": "Silver Sponsor",
    "mainContact": "Name name2",
    "sponsors": 54,
    "lastUpdated": "Last update 14 days ago"
  },
  {
    "name": "Gluid",
    "iconImg": IntelImage,
    "level": "Silver Sponsor",
    "mainContact": "test Search",
    "sponsors": 65,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Spherix",
    "iconImg": GCImage,
    "level": "Gold Sponsor",
    "mainContact": "test Search",
    "sponsors": 56,
    "lastUpdated": "Last update 20 days ago"
  },
  {
    "name": "Marqet",
    "iconImg": GCImage,
    "level": "Poor Sponsor",
    "mainContact": "Richard Wanye",
    "sponsors": 49,
    "lastUpdated": "Last update 11 days ago"
  },
  {
    "name": "Zytrek",
    "iconImg": AmdImage,
    "level": "Poor Sponsor",
    "mainContact": "Governor Cuomo",
    "sponsors": 27,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Sloganaut",
    "iconImg": GCImage,
    "level": "Gold Sponsor",
    "mainContact": "Governor Cuomo",
    "sponsors": 23,
    "lastUpdated": "Last update 7 days ago"
  }
]

export const AdminLanding = () => (
  <SampleDashboard data={dataMany}></SampleDashboard>
)
