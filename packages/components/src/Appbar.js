import PropTypes from "prop-types"
import { Box, Heading, Image, Text } from 'theme-ui'

export default function Appbar({ logo, children, ...props }) {
  return (
    <Box id={'appbar-container'} sx={{ display: 'grid', background: '#565656', gridTemplateColumns: '1fr 1fr', gridAutoColumns: '1fr', paddingBlock: 'min(2em, 1vh)', paddingInline: 'min(0.5em, 2vw)', gap: 'min(2em, 5vw)' }}>
      <Box id={'logo-container'} sx={{ display: 'flex', justifyContent: 'center', maxHeight: `4em` }}>
        <Image variant="sponsorHead" src={logo} sx={{ objectFit: 'scale-down', cursor: 'pointer' }} />
      </Box>
      <Box id={'controls-container'} sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center', paddingInline: 'min(0.5em, 2vw)', gap: ['0.25em'] }}>
        {children}
      </Box>
    </Box>
  )
}
