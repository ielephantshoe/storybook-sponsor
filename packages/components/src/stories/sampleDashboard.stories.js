
import SampleDashboard from '../SampleDashboard';


export default {
  title: "Sample Page Idea/Dashboard",
}

const dataMany = [
  {
    "name": "Norali",
    "levelCode": "#CD7F32",
    "level": "Poor Sponsor",
    "mainContact": "Bonita Prince",
    "sponsors": 66,
    "lastUpdated": "Last update 3 days ago"
  },
  {
    "name": "Accel",
    "levelCode": "#C0C0C0",
    "level": "Silver Sponsor",
    "mainContact": "Name name2",
    "sponsors": 54,
    "lastUpdated": "Last update 14 days ago"
  },
  {
    "name": "Gluid",
    "levelCode": "#C0C0C0",
    "level": "Silver Sponsor",
    "mainContact": "test Search",
    "sponsors": 65,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Spherix",
    "levelCode": "#FF0",
    "level": "Gold Sponsor",
    "mainContact": "test Search",
    "sponsors": 56,
    "lastUpdated": "Last update 20 days ago"
  },
  {
    "name": "Marqet",
    "levelCode": "#CD7F32",
    "level": "Poor Sponsor",
    "mainContact": "Richard Wanye",
    "sponsors": 49,
    "lastUpdated": "Last update 11 days ago"
  },
  {
    "name": "Zytrek",
    "levelCode": "#CD7F32",
    "level": "Poor Sponsor",
    "mainContact": "Governor Cuomo",
    "sponsors": 27,
    "lastUpdated": "Last update 7 days ago"
  },
  {
    "name": "Sloganaut",
    "levelCode": "#FF0",
    "level": "Gold Sponsor",
    "mainContact": "Governor Cuomo",
    "sponsors": 23,
    "lastUpdated": "Last update 7 days ago"
  }
]

export const adminDashboard = () => (
  <SampleDashboard data={dataMany}></SampleDashboard>
)
