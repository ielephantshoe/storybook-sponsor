import Head from "next/head"
import { Button, Appbar } from "@sponsorportal/components"
import styles from "../styles/Home.module.css"
import { Box, Heading, Image } from "theme-ui"

export default function Home() {
  return (
    <Box id={'appbar-container'} sx={{ display: 'grid', background: '#565656', gridTemplateColumns: '1fr 1fr', gridAutoColumns: '1fr', paddingBlock: 'min(2em, 1vh)', paddingInline:'min(0.5em, 2vw)', gap: 'min(2em, 5vw)'}}>
    <Box id={'logo-container'} sx={{ display: 'flex', justifyContent: 'center', maxHeight: `4em` }}>
      <Image id="sponsorHead" src={'https://www.veeamsponsorships.com/veeamon/images/veeam-logo.png'} sx={{ objectFit:'scale-down', cursor:'pointer'}}  />
    </Box>
    <Box id={'controls-container'} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', alignItems:'center', paddingInline:'min(0.5em, 2vw)', gap: ['0.25em']}}>
      <Heading as='h1' sx={{ color: 'white', fontSize: ['1em','1.5em','1.75em']}}>
        Admin
      </Heading>
      <Box id={'nav-items-container'} sx={{ display: 'flex'}}>
        <Button>logout</Button>
      </Box>
    </Box>
  </Box>
  )
}
